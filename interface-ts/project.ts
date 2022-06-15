/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';
import { Observable } from 'rxjs';
import { Value } from './google/protobuf/struct';

export const protobufPackage = 'project';

export interface ProtoObject {
  value: any | undefined;
}

export interface Request {
  id: string;
  update: ProtoObject | undefined;
}

export interface Project {
  id: string;
  name: string;
  description?: string | undefined;
  chain: string;
  masterAddress?: string | undefined;
  masterPrivateKey?: string | undefined;
  contract721Address?: string | undefined;
  l1Mnemonic: string;
  image?: string | undefined;
  blockchain?: string | undefined;
  status?: string | undefined;
  apiSecret?: string | undefined;
}

export const PROJECT_PACKAGE_NAME = 'project';

function createBaseProtoObject(): ProtoObject {
  return { value: undefined };
}

export const ProtoObject = {
  encode(message: ProtoObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      Value.encode(Value.wrap(message.value), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProtoObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProtoObject {
    return {
      value: isSet(object?.value) ? object.value : undefined,
    };
  },

  toJSON(message: ProtoObject): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

function createBaseRequest(): Request {
  return { id: '', update: undefined };
}

export const Request = {
  encode(message: Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.update !== undefined) {
      ProtoObject.encode(message.update, writer.uint32(18).fork()).ldelim();
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
          message.update = ProtoObject.decode(reader, reader.uint32());
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
      update: isSet(object.update) ? ProtoObject.fromJSON(object.update) : undefined,
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.update !== undefined && (obj.update = message.update ? ProtoObject.toJSON(message.update) : undefined);
    return obj;
  },
};

function createBaseProject(): Project {
  return {
    id: '',
    name: '',
    description: undefined,
    chain: '',
    masterAddress: undefined,
    masterPrivateKey: undefined,
    contract721Address: undefined,
    l1Mnemonic: '',
    image: undefined,
    blockchain: undefined,
    status: undefined,
    apiSecret: undefined,
  };
}

export const Project = {
  encode(message: Project, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    if (message.chain !== '') {
      writer.uint32(34).string(message.chain);
    }
    if (message.masterAddress !== undefined) {
      writer.uint32(42).string(message.masterAddress);
    }
    if (message.masterPrivateKey !== undefined) {
      writer.uint32(50).string(message.masterPrivateKey);
    }
    if (message.contract721Address !== undefined) {
      writer.uint32(58).string(message.contract721Address);
    }
    if (message.l1Mnemonic !== '') {
      writer.uint32(66).string(message.l1Mnemonic);
    }
    if (message.image !== undefined) {
      writer.uint32(74).string(message.image);
    }
    if (message.blockchain !== undefined) {
      writer.uint32(82).string(message.blockchain);
    }
    if (message.status !== undefined) {
      writer.uint32(90).string(message.status);
    }
    if (message.apiSecret !== undefined) {
      writer.uint32(98).string(message.apiSecret);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Project {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.chain = reader.string();
          break;
        case 5:
          message.masterAddress = reader.string();
          break;
        case 6:
          message.masterPrivateKey = reader.string();
          break;
        case 7:
          message.contract721Address = reader.string();
          break;
        case 8:
          message.l1Mnemonic = reader.string();
          break;
        case 9:
          message.image = reader.string();
          break;
        case 10:
          message.blockchain = reader.string();
          break;
        case 11:
          message.status = reader.string();
          break;
        case 12:
          message.apiSecret = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Project {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      name: isSet(object.name) ? String(object.name) : '',
      description: isSet(object.description) ? String(object.description) : undefined,
      chain: isSet(object.chain) ? String(object.chain) : '',
      masterAddress: isSet(object.masterAddress) ? String(object.masterAddress) : undefined,
      masterPrivateKey: isSet(object.masterPrivateKey) ? String(object.masterPrivateKey) : undefined,
      contract721Address: isSet(object.contract721Address) ? String(object.contract721Address) : undefined,
      l1Mnemonic: isSet(object.l1Mnemonic) ? String(object.l1Mnemonic) : '',
      image: isSet(object.image) ? String(object.image) : undefined,
      blockchain: isSet(object.blockchain) ? String(object.blockchain) : undefined,
      status: isSet(object.status) ? String(object.status) : undefined,
      apiSecret: isSet(object.apiSecret) ? String(object.apiSecret) : undefined,
    };
  },

  toJSON(message: Project): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.chain !== undefined && (obj.chain = message.chain);
    message.masterAddress !== undefined && (obj.masterAddress = message.masterAddress);
    message.masterPrivateKey !== undefined && (obj.masterPrivateKey = message.masterPrivateKey);
    message.contract721Address !== undefined && (obj.contract721Address = message.contract721Address);
    message.l1Mnemonic !== undefined && (obj.l1Mnemonic = message.l1Mnemonic);
    message.image !== undefined && (obj.image = message.image);
    message.blockchain !== undefined && (obj.blockchain = message.blockchain);
    message.status !== undefined && (obj.status = message.status);
    message.apiSecret !== undefined && (obj.apiSecret = message.apiSecret);
    return obj;
  },
};

export interface ProjectServiceClient {
  findByIdAndUpdate(request: Request, ...rest: any): Observable<Project>;
}

export interface ProjectServiceController {
  findByIdAndUpdate(request: Request, ...rest: any): Promise<Project> | Observable<Project> | Project;
}

export function ProjectServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['findByIdAndUpdate'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod('ProjectService', method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod('ProjectService', method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const PROJECT_SERVICE_NAME = 'ProjectService';

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
