package api

import (
	"encoding/json"
	"net"

	"github.com/Banana-Boat/terryminal/main-service/internal/pb"
	"github.com/Banana-Boat/terryminal/main-service/internal/pty"
	"github.com/Banana-Boat/terryminal/main-service/internal/util"
	"github.com/gin-gonic/gin"
	"github.com/gobwas/ws"
	"github.com/gobwas/ws/wsutil"
	"github.com/mitchellh/mapstructure"
	"github.com/rs/zerolog/log"
	"google.golang.org/grpc"
)

type PtyHandler struct {
	container  *pty.PtyContainer       // pty Docker容器
	gRPCConn   *grpc.ClientConn        // gRPC连接
	gRPCClient pb.BasePtyClient        // gRPC客户端
	gRPCStream pb.BasePty_RunCmdClient // gRPC数据流
}

// 单个socket连接的上下文
type WSContext struct {
	conn          net.Conn
	config        util.Config
	PtyHandlerMap map[string]*PtyHandler
}

func (server *Server) terminalWSHandle(c *gin.Context) {
	conn, _, _, err := ws.UpgradeHTTP(c.Request, c.Writer)
	if err != nil {
		log.Error().Err(err).Msg("cannot upgrade http to websocket")
		return
	}
	log.Info().Msgf("new socket conn from %s", conn.RemoteAddr().String())
	defer conn.Close()

	wsCtx := &WSContext{
		conn:          conn,
		config:        server.config,
		PtyHandlerMap: make(map[string]*PtyHandler),
	}
	for {
		msg, _, err := wsutil.ReadClientData(conn)
		if err != nil {
			if len(wsCtx.PtyHandlerMap) != 0 { // 客户端主动断开连接
				destroyAll(wsCtx)
			}
			log.Info().Msgf("socket conn closed from %s", conn.RemoteAddr().String())
			return
		}

		/* 解析 message */
		var wsMsg Message
		if err := json.Unmarshal(msg, &wsMsg); err != nil {
			log.Error().Err(err).Msg("cannot unmarshal message")
			return
		}

		/* 根据Event字段进行路由 */
		routeByEvent(wsCtx, wsMsg)
	}
}

func routeByEvent(wsCtx *WSContext, wsMsg Message) {
	switch wsMsg.Event {
	case "start":
		startEventHandle(wsCtx, wsMsg.PtyID, wsCtx.config)

	case "end":
		endEventHandle(wsCtx, wsMsg.PtyID)

	case "run-cmd":
		/* 将Data字段解析为对应结构体 */
		var data RunCmdClientData
		if err := mapstructure.Decode(wsMsg.Data, &data); err != nil {
			log.Error().Err(err).Msg("cannot decode data")
			return
		}

		runCmdEventHandle(wsCtx, wsMsg.PtyID, data.Cmd)
	}
}