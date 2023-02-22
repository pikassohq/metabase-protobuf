/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "Balance";

export interface BalanceInput {
  userId: string;
  currency: string;
}

export interface Balance {
  balance: number;
}

export const BALANCE_PACKAGE_NAME = "Balance";

function createBaseBalanceInput(): BalanceInput {
  return { userId: "", currency: "" };
}

export const BalanceInput = {
  encode(message: BalanceInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.currency !== "") {
      writer.uint32(18).string(message.currency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BalanceInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalanceInput();
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

  fromJSON(object: any): BalanceInput {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      currency: isSet(object.currency) ? String(object.currency) : "",
    };
  },

  toJSON(message: BalanceInput): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.currency !== undefined && (obj.currency = message.currency);
    return obj;
  },
};

function createBaseBalance(): Balance {
  return { balance: 0 };
}

export const Balance = {
  encode(message: Balance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== 0) {
      writer.uint32(8).int32(message.balance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Balance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Balance {
    return { balance: isSet(object.balance) ? Number(object.balance) : 0 };
  },

  toJSON(message: Balance): unknown {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = Math.round(message.balance));
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
