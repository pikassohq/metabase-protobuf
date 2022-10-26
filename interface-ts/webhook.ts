/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "webhook";

export interface WebhookInput {
  id: string;
  status: string;
  error?: string | undefined;
}

export interface Status {
  response: string;
}

export const WEBHOOK_PACKAGE_NAME = "webhook";

function createBaseWebhookInput(): WebhookInput {
  return { id: "", status: "" };
}

export const WebhookInput = {
  encode(message: WebhookInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WebhookInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWebhookInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.status = reader.string();
          break;
        case 3:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WebhookInput {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      status: isSet(object.status) ? String(object.status) : "",
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: WebhookInput): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.status !== undefined && (obj.status = message.status);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
};

function createBaseStatus(): Status {
  return { response: "" };
}

export const Status = {
  encode(message: Status, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== "") {
      writer.uint32(10).string(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Status {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Status {
    return { response: isSet(object.response) ? String(object.response) : "" };
  },

  toJSON(message: Status): unknown {
    const obj: any = {};
    message.response !== undefined && (obj.response = message.response);
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
