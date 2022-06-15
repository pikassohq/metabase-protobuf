/* eslint-disable */
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';

export const protobufPackage = 'transaction';

export interface Request {
  id: string;
  update: TransactionUpdate | undefined;
}

export interface Transaction {
  id: string;
  status: string;
  project: string;
}

export interface TransactionUpdate {
  retry?: number | undefined;
  status?: string | undefined;
}

export const TRANSACTION_PACKAGE_NAME = 'transaction';

function createBaseRequest(): Request {
  return { id: '', update: undefined };
}

export const Request = {
  encode(message: Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.update !== undefined) {
      TransactionUpdate.encode(message.update, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.update = TransactionUpdate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Request {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      update: isSet(object.update) ? TransactionUpdate.fromJSON(object.update) : undefined,
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.update !== undefined &&
      (obj.update = message.update ? TransactionUpdate.toJSON(message.update) : undefined);
    return obj;
  },
};

function createBaseTransaction(): Transaction {
  return { id: '', status: '', project: '' };
}

export const Transaction = {
  encode(message: Transaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.status !== '') {
      writer.uint32(18).string(message.status);
    }
    if (message.project !== '') {
      writer.uint32(26).string(message.project);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransaction();
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
          message.project = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Transaction {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      status: isSet(object.status) ? String(object.status) : '',
      project: isSet(object.project) ? String(object.project) : '',
    };
  },

  toJSON(message: Transaction): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.status !== undefined && (obj.status = message.status);
    message.project !== undefined && (obj.project = message.project);
    return obj;
  },
};

function createBaseTransactionUpdate(): TransactionUpdate {
  return { retry: undefined, status: undefined };
}

export const TransactionUpdate = {
  encode(message: TransactionUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.retry !== undefined) {
      writer.uint32(8).int32(message.retry);
    }
    if (message.status !== undefined) {
      writer.uint32(18).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.retry = reader.int32();
          break;
        case 2:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransactionUpdate {
    return {
      retry: isSet(object.retry) ? Number(object.retry) : undefined,
      status: isSet(object.status) ? String(object.status) : undefined,
    };
  },

  toJSON(message: TransactionUpdate): unknown {
    const obj: any = {};
    message.retry !== undefined && (obj.retry = Math.round(message.retry));
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },
};

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
