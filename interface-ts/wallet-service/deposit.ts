/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "Deposit";

export interface DepositInput {
  amount: number;
  currency: string;
  details: string;
  userId: string;
}

export interface DepositResponse {
  status: number;
  error: string[];
}

export const DEPOSIT_PACKAGE_NAME = "Deposit";

function createBaseDepositInput(): DepositInput {
  return { amount: 0, currency: "", details: "", userId: "" };
}

export const DepositInput = {
  encode(message: DepositInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== 0) {
      writer.uint32(8).int32(message.amount);
    }
    if (message.currency !== "") {
      writer.uint32(18).string(message.currency);
    }
    if (message.details !== "") {
      writer.uint32(26).string(message.details);
    }
    if (message.userId !== "") {
      writer.uint32(34).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.int32();
          break;
        case 2:
          message.currency = reader.string();
          break;
        case 3:
          message.details = reader.string();
          break;
        case 4:
          message.userId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositInput {
    return {
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      currency: isSet(object.currency) ? String(object.currency) : "",
      details: isSet(object.details) ? String(object.details) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
    };
  },

  toJSON(message: DepositInput): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.currency !== undefined && (obj.currency = message.currency);
    message.details !== undefined && (obj.details = message.details);
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },
};

function createBaseDepositResponse(): DepositResponse {
  return { status: 0, error: [] };
}

export const DepositResponse = {
  encode(message: DepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    for (const v of message.error) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32();
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

  fromJSON(object: any): DepositResponse {
    return {
      status: isSet(object.status) ? Number(object.status) : 0,
      error: Array.isArray(object?.error) ? object.error.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: DepositResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = Math.round(message.status));
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
