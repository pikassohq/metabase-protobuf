/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';
import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';

export const protobufPackage = 'project';

export interface Request {
  id: string;
  update: { [key: string]: any } | undefined;
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

function createBaseRequest(): Request {
  return { id: '', update: undefined };
}

export const Request = {
  fromJSON(object: any): Request {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      update: isObject(object.update) ? object.update : undefined,
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.update !== undefined && (obj.update = message.update);
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
  findByIdAndUpdate(request: Request, metadata: Metadata, ...rest: any): Observable<Project>;
}

export interface ProjectServiceController {
  findByIdAndUpdate(
    request: Request,
    metadata: Metadata,
    ...rest: any
  ): Promise<Project> | Observable<Project> | Project;
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

function isObject(value: any): boolean {
  return typeof value === 'object' && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
