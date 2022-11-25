/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "nativeToken";

export interface GetNativeTokenInput {
  provider: string;
  chain: string;
}

export interface GetNativeTokenOutput {
  usd: number;
}

export const NATIVE_TOKEN_PACKAGE_NAME = "nativeToken";

function createBaseGetNativeTokenInput(): GetNativeTokenInput {
  return { provider: "", chain: "" };
}

export const GetNativeTokenInput = {
  encode(message: GetNativeTokenInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNativeTokenInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNativeTokenInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        case 2:
          message.chain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNativeTokenInput {
    return {
      provider: isSet(object.provider) ? String(object.provider) : "",
      chain: isSet(object.chain) ? String(object.chain) : "",
    };
  },

  toJSON(message: GetNativeTokenInput): unknown {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = message.provider);
    message.chain !== undefined && (obj.chain = message.chain);
    return obj;
  },
};

function createBaseGetNativeTokenOutput(): GetNativeTokenOutput {
  return { usd: 0 };
}

export const GetNativeTokenOutput = {
  encode(message: GetNativeTokenOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.usd !== 0) {
      writer.uint32(13).float(message.usd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNativeTokenOutput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNativeTokenOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.usd = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNativeTokenOutput {
    return { usd: isSet(object.usd) ? Number(object.usd) : 0 };
  },

  toJSON(message: GetNativeTokenOutput): unknown {
    const obj: any = {};
    message.usd !== undefined && (obj.usd = message.usd);
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
