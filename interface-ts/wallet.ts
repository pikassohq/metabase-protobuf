/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import * as _m0 from 'protobufjs/minimal';

export const protobufPackage = 'WalletService';

export interface User {
  id: string;
}

export interface WalletInput {
  userId: string;
  currency: string;
}

export interface Wallet {
  id: string;
  userId: string;
  balance: number;
  currency: string;
}

export interface DepositInput {
  walletId: string;
  amount: number;
  currency: string;
}

export interface DepositResponse {
  status: number;
  error: string[];
}

export interface TransferInput {
  fromId: string;
  toId: string;
  amount: number;
  currency: string;
}

export interface TransferResponse {
  status: number;
  error: string[];
}

export interface Balance {
  balance: number;
}

export const WALLET_SERVICE_PACKAGE_NAME = 'WalletService';

function createBaseUser(): User {
  return { id: '' };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      id: isSet(object.id) ? String(object.id) : '',
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
};

function createBaseWalletInput(): WalletInput {
  return { userId: '', currency: '' };
}

export const WalletInput = {
  encode(message: WalletInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== '') {
      writer.uint32(10).string(message.userId);
    }
    if (message.currency !== '') {
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
      userId: isSet(object.userId) ? String(object.userId) : '',
      currency: isSet(object.currency) ? String(object.currency) : '',
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
  return { id: '', userId: '', balance: 0, currency: '' };
}

export const Wallet = {
  encode(message: Wallet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.userId !== '') {
      writer.uint32(18).string(message.userId);
    }
    if (message.balance !== 0) {
      writer.uint32(24).int32(message.balance);
    }
    if (message.currency !== '') {
      writer.uint32(34).string(message.currency);
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
          message.id = reader.string();
          break;
        case 2:
          message.userId = reader.string();
          break;
        case 3:
          message.balance = reader.int32();
          break;
        case 4:
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
      id: isSet(object.id) ? String(object.id) : '',
      userId: isSet(object.userId) ? String(object.userId) : '',
      balance: isSet(object.balance) ? Number(object.balance) : 0,
      currency: isSet(object.currency) ? String(object.currency) : '',
    };
  },

  toJSON(message: Wallet): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.userId !== undefined && (obj.userId = message.userId);
    message.balance !== undefined && (obj.balance = Math.round(message.balance));
    message.currency !== undefined && (obj.currency = message.currency);
    return obj;
  },
};

function createBaseDepositInput(): DepositInput {
  return { walletId: '', amount: 0, currency: '' };
}

export const DepositInput = {
  encode(message: DepositInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.walletId !== '') {
      writer.uint32(10).string(message.walletId);
    }
    if (message.amount !== 0) {
      writer.uint32(16).int32(message.amount);
    }
    if (message.currency !== '') {
      writer.uint32(26).string(message.currency);
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
          message.walletId = reader.string();
          break;
        case 2:
          message.amount = reader.int32();
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

  fromJSON(object: any): DepositInput {
    return {
      walletId: isSet(object.walletId) ? String(object.walletId) : '',
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      currency: isSet(object.currency) ? String(object.currency) : '',
    };
  },

  toJSON(message: DepositInput): unknown {
    const obj: any = {};
    message.walletId !== undefined && (obj.walletId = message.walletId);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.currency !== undefined && (obj.currency = message.currency);
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

function createBaseTransferInput(): TransferInput {
  return { fromId: '', toId: '', amount: 0, currency: '' };
}

export const TransferInput = {
  encode(message: TransferInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromId !== '') {
      writer.uint32(10).string(message.fromId);
    }
    if (message.toId !== '') {
      writer.uint32(18).string(message.toId);
    }
    if (message.amount !== 0) {
      writer.uint32(24).int32(message.amount);
    }
    if (message.currency !== '') {
      writer.uint32(34).string(message.currency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransferInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromId = reader.string();
          break;
        case 2:
          message.toId = reader.string();
          break;
        case 3:
          message.amount = reader.int32();
          break;
        case 4:
          message.currency = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransferInput {
    return {
      fromId: isSet(object.fromId) ? String(object.fromId) : '',
      toId: isSet(object.toId) ? String(object.toId) : '',
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      currency: isSet(object.currency) ? String(object.currency) : '',
    };
  },

  toJSON(message: TransferInput): unknown {
    const obj: any = {};
    message.fromId !== undefined && (obj.fromId = message.fromId);
    message.toId !== undefined && (obj.toId = message.toId);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.currency !== undefined && (obj.currency = message.currency);
    return obj;
  },
};

function createBaseTransferResponse(): TransferResponse {
  return { status: 0, error: [] };
}

export const TransferResponse = {
  encode(message: TransferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    for (const v of message.error) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferResponse();
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

  fromJSON(object: any): TransferResponse {
    return {
      status: isSet(object.status) ? Number(object.status) : 0,
      error: Array.isArray(object?.error) ? object.error.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: TransferResponse): unknown {
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
    return {
      balance: isSet(object.balance) ? Number(object.balance) : 0,
    };
  },

  toJSON(message: Balance): unknown {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = Math.round(message.balance));
    return obj;
  },
};

export interface WalletServiceClient {
  createWallet(request: WalletInput, ...rest: any): Observable<Wallet>;

  getBalance(request: User, ...rest: any): Observable<Balance>;

  depositWallet(request: DepositInput, ...rest: any): Observable<DepositResponse>;

  transferFund(request: TransferInput, ...rest: any): Observable<TransferResponse>;
}

export interface WalletServiceController {
  createWallet(request: WalletInput, ...rest: any): Promise<Wallet> | Observable<Wallet> | Wallet;

  getBalance(request: User, ...rest: any): Promise<Balance> | Observable<Balance> | Balance;

  depositWallet(
    request: DepositInput,
    ...rest: any
  ): Promise<DepositResponse> | Observable<DepositResponse> | DepositResponse;

  transferFund(
    request: TransferInput,
    ...rest: any
  ): Promise<TransferResponse> | Observable<TransferResponse> | TransferResponse;
}

export function WalletServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['createWallet', 'getBalance', 'depositWallet', 'transferFund'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod('WalletService', method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod('WalletService', method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const WALLET_SERVICE_NAME = 'WalletService';

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
