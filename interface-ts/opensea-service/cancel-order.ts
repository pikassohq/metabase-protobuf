/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "CancelOrder";

export interface CancelOrder {
  assetContractAddress: string;
  tokenId: string;
  accountAddress: string;
  privateKey: string;
}

export interface CancelStatus {
  message: string;
}

export const CANCEL_ORDER_PACKAGE_NAME = "CancelOrder";

function createBaseCancelOrder(): CancelOrder {
  return { assetContractAddress: "", tokenId: "", accountAddress: "", privateKey: "" };
}

export const CancelOrder = {
  encode(message: CancelOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetContractAddress !== "") {
      writer.uint32(10).string(message.assetContractAddress);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    if (message.accountAddress !== "") {
      writer.uint32(26).string(message.accountAddress);
    }
    if (message.privateKey !== "") {
      writer.uint32(34).string(message.privateKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetContractAddress = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        case 3:
          message.accountAddress = reader.string();
          break;
        case 4:
          message.privateKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CancelOrder {
    return {
      assetContractAddress: isSet(object.assetContractAddress) ? String(object.assetContractAddress) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
      privateKey: isSet(object.privateKey) ? String(object.privateKey) : "",
    };
  },

  toJSON(message: CancelOrder): unknown {
    const obj: any = {};
    message.assetContractAddress !== undefined && (obj.assetContractAddress = message.assetContractAddress);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    message.privateKey !== undefined && (obj.privateKey = message.privateKey);
    return obj;
  },
};

function createBaseCancelStatus(): CancelStatus {
  return { message: "" };
}

export const CancelStatus = {
  encode(message: CancelStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CancelStatus {
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: CancelStatus): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
