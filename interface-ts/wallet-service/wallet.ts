/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "Wallet";

export interface WalletInput {
  userId: string;
  currency: string;
}

export interface Wallet {
  walletAddress: string;
  balance: number;
  currency: string;
}

export const WALLET_PACKAGE_NAME = "Wallet";

function createBaseWalletInput(): WalletInput {
  return { userId: "", currency: "" };
}

export const WalletInput = {
  encode(message: WalletInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.currency !== "") {
      writer.uint32(18).string(message.currency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WalletInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWalletInput();
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

  fromJSON(object: any): WalletInput {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      currency: isSet(object.currency) ? String(object.currency) : "",
    };
  },

  toJSON(message: WalletInput): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.currency !== undefined && (obj.currency = message.currency);
    return obj;
  },
};

function createBaseWallet(): Wallet {
  return { walletAddress: "", balance: 0, currency: "" };
}

export const Wallet = {
  encode(message: Wallet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.walletAddress !== "") {
      writer.uint32(10).string(message.walletAddress);
    }
    if (message.balance !== 0) {
      writer.uint32(16).int32(message.balance);
    }
    if (message.currency !== "") {
      writer.uint32(26).string(message.currency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Wallet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWallet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.walletAddress = reader.string();
          break;
        case 2:
          message.balance = reader.int32();
          break;
        case 3:
          message.currency = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Wallet {
    return {
      walletAddress: isSet(object.walletAddress) ? String(object.walletAddress) : "",
      balance: isSet(object.balance) ? Number(object.balance) : 0,
      currency: isSet(object.currency) ? String(object.currency) : "",
    };
  },

  toJSON(message: Wallet): unknown {
    const obj: any = {};
    message.walletAddress !== undefined && (obj.walletAddress = message.walletAddress);
    message.balance !== undefined && (obj.balance = Math.round(message.balance));
    message.currency !== undefined && (obj.currency = message.currency);
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
