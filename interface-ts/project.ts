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

export interface ProjectServiceClient {
  findByIdAndUpdate(request: Request, metadata?: Metadata): Observable<Project>;
}

export interface ProjectServiceController {
  findByIdAndUpdate(request: Request, metadata?: Metadata): Promise<Project> | Observable<Project> | Project;
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
