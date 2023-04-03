/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.21.12
 * source: base_pty.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export class StartRequest extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        username?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("username" in data && data.username != undefined) {
                this.username = data.username;
            }
        }
    }
    get username() {
        return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
    }
    set username(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data: {
        username?: string;
    }): StartRequest {
        const message = new StartRequest({});
        if (data.username != null) {
            message.username = data.username;
        }
        return message;
    }
    toObject() {
        const data: {
            username?: string;
        } = {};
        if (this.username != null) {
            data.username = this.username;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.username.length)
            writer.writeString(1, this.username);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): StartRequest {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new StartRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.username = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): StartRequest {
        return StartRequest.deserialize(bytes);
    }
}
export class StartResponse extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        result?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("result" in data && data.result != undefined) {
                this.result = data.result;
            }
        }
    }
    get result() {
        return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
    }
    set result(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data: {
        result?: string;
    }): StartResponse {
        const message = new StartResponse({});
        if (data.result != null) {
            message.result = data.result;
        }
        return message;
    }
    toObject() {
        const data: {
            result?: string;
        } = {};
        if (this.result != null) {
            data.result = this.result;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.result.length)
            writer.writeString(1, this.result);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): StartResponse {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new StartResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.result = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): StartResponse {
        return StartResponse.deserialize(bytes);
    }
}
export class RunCmdRequest extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        cmd?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("cmd" in data && data.cmd != undefined) {
                this.cmd = data.cmd;
            }
        }
    }
    get cmd() {
        return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
    }
    set cmd(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data: {
        cmd?: string;
    }): RunCmdRequest {
        const message = new RunCmdRequest({});
        if (data.cmd != null) {
            message.cmd = data.cmd;
        }
        return message;
    }
    toObject() {
        const data: {
            cmd?: string;
        } = {};
        if (this.cmd != null) {
            data.cmd = this.cmd;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.cmd.length)
            writer.writeString(1, this.cmd);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RunCmdRequest {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RunCmdRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.cmd = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): RunCmdRequest {
        return RunCmdRequest.deserialize(bytes);
    }
}
export class RunCmdResponse extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        result?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("result" in data && data.result != undefined) {
                this.result = data.result;
            }
        }
    }
    get result() {
        return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
    }
    set result(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data: {
        result?: string;
    }): RunCmdResponse {
        const message = new RunCmdResponse({});
        if (data.result != null) {
            message.result = data.result;
        }
        return message;
    }
    toObject() {
        const data: {
            result?: string;
        } = {};
        if (this.result != null) {
            data.result = this.result;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.result.length)
            writer.writeString(1, this.result);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RunCmdResponse {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RunCmdResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.result = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): RunCmdResponse {
        return RunCmdResponse.deserialize(bytes);
    }
}
interface GrpcUnaryServiceInterface<P, R> {
    (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
}
interface GrpcStreamServiceInterface<P, R> {
    (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
    (message: P, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
}
interface GrpWritableServiceInterface<P, R> {
    (metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    (metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    (options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    (callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
}
interface GrpcChunkServiceInterface<P, R> {
    (metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
    (options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
}
interface GrpcPromiseServiceInterface<P, R> {
    (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): Promise<R>;
    (message: P, options?: grpc_1.CallOptions): Promise<R>;
}
export abstract class UnimplementedBasePtyService {
    static definition = {
        Start: {
            path: "/BasePty/Start",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message: StartRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => StartRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: StartResponse) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => StartResponse.deserialize(new Uint8Array(bytes))
        },
        RunCmd: {
            path: "/BasePty/RunCmd",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message: RunCmdRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => RunCmdRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: RunCmdResponse) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => RunCmdResponse.deserialize(new Uint8Array(bytes))
        }
    };
    [method: string]: grpc_1.UntypedHandleCall;
    abstract Start(call: grpc_1.ServerUnaryCall<StartRequest, StartResponse>, callback: grpc_1.sendUnaryData<StartResponse>): void;
    abstract RunCmd(call: grpc_1.ServerUnaryCall<RunCmdRequest, RunCmdResponse>, callback: grpc_1.sendUnaryData<RunCmdResponse>): void;
}
export class BasePtyClient extends grpc_1.makeGenericClientConstructor(UnimplementedBasePtyService.definition, "BasePty", {}) {
    constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
        super(address, credentials, options);
    }
    Start: GrpcUnaryServiceInterface<StartRequest, StartResponse> = (message: StartRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<StartResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<StartResponse>, callback?: grpc_1.requestCallback<StartResponse>): grpc_1.ClientUnaryCall => {
        return super.Start(message, metadata, options, callback);
    };
    RunCmd: GrpcUnaryServiceInterface<RunCmdRequest, RunCmdResponse> = (message: RunCmdRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<RunCmdResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<RunCmdResponse>, callback?: grpc_1.requestCallback<RunCmdResponse>): grpc_1.ClientUnaryCall => {
        return super.RunCmd(message, metadata, options, callback);
    };
}
