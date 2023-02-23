/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "AddCard";

export interface AddCardInput {
  userId: string;
  currency: string;
}

export interface AddCardResponse {
  addCardLink: string;
  error: string[];
}

export const ADD_CARD_PACKAGE_NAME = "AddCard";

function createBaseAddCardInput(): AddCardInput {
  return { userId: "", currency: "" };
}

export const AddCardInput = {
  encode(message: AddCardInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.currency !== "") {
      writer.uint32(18).string(message.currency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddCardInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddCardInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        case 2:
          message.currency = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddCardInput {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      currency: isSet(object.currency) ? String(object.currency) : "",
    };
  },

  toJSON(message: AddCardInput): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.currency !== undefined && (obj.currency = message.currency);
    return obj;
  },
};

function createBaseAddCardResponse(): AddCardResponse {
  return { addCardLink: "", error: [] };
}

export const AddCardResponse = {
  encode(message: AddCardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addCardLink !== "") {
      writer.uint32(10).string(message.addCardLink);
    }
    for (const v of message.error) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddCardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddCardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addCardLink = reader.string();
          break;
        case 2:
          message.error.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddCardResponse {
    return {
      addCardLink: isSet(object.addCardLink) ? String(object.addCardLink) : "",
      error: Array.isArray(object?.error) ? object.error.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: AddCardResponse): unknown {
    const obj: any = {};
    message.addCardLink !== undefined && (obj.addCardLink = message.addCardLink);
    if (message.error) {
      obj.error = message.error.map((e) => e);
    } else {
      obj.error = [];
    }
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
