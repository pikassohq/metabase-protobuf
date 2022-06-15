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
  id: number;
  name: string;
  description: string;
  chain: string;
  masterAddress: string;
  masterPrivateKey: string;
  contract721Address: string;
  l1Mnemonic: string;
  image: string;
  blockchain: string;
  status: string;
  apiSecret: string;
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
