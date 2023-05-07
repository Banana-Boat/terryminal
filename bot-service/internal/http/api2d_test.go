package http

import (
	"fmt"
	"io"
	"testing"

	"github.com/Banana-Boat/terryminal/bot-service/internal/util"
	"github.com/sashabaranov/go-openai"
)

func TestApi2d(t *testing.T) {
	// github action 不执行该测试
	if testing.Short() {
		t.Skip("Skipping test in github action.")
	}

	/* 加载配置 */
	config, err := util.LoadConfig("../..")
	if err != nil {
		t.Error(err)
	}

	reqBody := openai.ChatCompletionRequest{
		Model: openai.GPT3Dot5Turbo,
		Messages: []openai.ChatCompletionMessage{
			{
				Role:    openai.ChatMessageRoleUser,
				Content: "你好",
			},
		},
		MaxTokens:   300,
		Temperature: 0.2,
		Stream:      true,
	}

	api2dClient := NewApi2dClient(config)
	stream, err := api2dClient.CreateStream(reqBody)
	if err != nil {
		t.Errorf("CreateStream() error = %v", err)
		return
	}
	defer stream.Close()

	for {
		resp, isValid, err := stream.Recv()
		if err != nil {
			if err == io.EOF {
				break
			}
			t.Errorf("Recv() error = %v", err)
			return
		}
		if isValid {
			continue
		}
		fmt.Print(resp.Choices[0].Delta.Content)
	}
}