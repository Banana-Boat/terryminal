/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.21.12
 * source: mail_service.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./google/protobuf/timestamp";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace pb {
    export class SendMailRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            destAddr?: string;
            content?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("destAddr" in data && data.destAddr != undefined) {
                    this.destAddr = data.destAddr;
                }
                if ("content" in data && data.content != undefined) {
                    this.content = data.content;
                }
            }
        }
        get destAddr() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set destAddr(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get content() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set content(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            destAddr?: string;
            content?: string;
        }): SendMailRequest {
            const message = new SendMailRequest({});
            if (data.destAddr != null) {
                message.destAddr = data.destAddr;
            }
            if (data.content != null) {
                message.content = data.content;
            }
            return message;
        }
        toObject() {
            const data: {
                destAddr?: string;
                content?: string;
            } = {};
            if (this.destAddr != null) {
                data.destAddr = this.destAddr;
            }
            if (this.content != null) {
                data.content = this.content;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.destAddr.length)
                writer.writeString(1, this.destAddr);
            if (this.content.length)
                writer.writeString(2, this.content);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SendMailRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SendMailRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.destAddr = reader.readString();
                        break;
                    case 2:
                        message.content = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): SendMailRequest {
            return SendMailRequest.deserialize(bytes);
        }
    }
    export class SendMailResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            createdAt?: dependency_1.google.protobuf.Timestamp;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("createdAt" in data && data.createdAt != undefined) {
                    this.createdAt = data.createdAt;
                }
            }
        }
        get createdAt() {
            return pb_1.Message.getWrapperField(this, dependency_1.google.protobuf.Timestamp, 1) as dependency_1.google.protobuf.Timestamp;
        }
        set createdAt(value: dependency_1.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_createdAt() {
            return pb_1.Message.getField(this, 1) != null;
        }
        static fromObject(data: {
            createdAt?: ReturnType<typeof dependency_1.google.protobuf.Timestamp.prototype.toObject>;
        }): SendMailResponse {
            const message = new SendMailResponse({});
            if (data.createdAt != null) {
                message.createdAt = dependency_1.google.protobuf.Timestamp.fromObject(data.createdAt);
            }
            return message;
        }
        toObject() {
            const data: {
                createdAt?: ReturnType<typeof dependency_1.google.protobuf.Timestamp.prototype.toObject>;
            } = {};
            if (this.createdAt != null) {
                data.createdAt = this.createdAt.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_createdAt)
                writer.writeMessage(1, this.createdAt, () => this.createdAt.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SendMailResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SendMailResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.createdAt, () => message.createdAt = dependency_1.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): SendMailResponse {
            return SendMailResponse.deserialize(bytes);
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
    export abstract class UnimplementedMailServiceService {
        static definition = {
            SendMail: {
                path: "/pb.MailService/SendMail",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: SendMailRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => SendMailRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: SendMailResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => SendMailResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract SendMail(call: grpc_1.ServerUnaryCall<SendMailRequest, SendMailResponse>, callback: grpc_1.sendUnaryData<SendMailResponse>): void;
    }
    export class MailServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedMailServiceService.definition, "MailService", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        SendMail: GrpcUnaryServiceInterface<SendMailRequest, SendMailResponse> = (message: SendMailRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<SendMailResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<SendMailResponse>, callback?: grpc_1.requestCallback<SendMailResponse>): grpc_1.ClientUnaryCall => {
            return super.SendMail(message, metadata, options, callback);
        };
    }
}
