// Original file: src/protobuf/project.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Project as _project_Project, Project__Output as _project_Project__Output } from '../project/Project';
import type { Request as _project_Request, Request__Output as _project_Request__Output } from '../project/Request';

export interface ProjectServiceClient extends grpc.Client {
  FindByIdAndUpdate(argument: _project_Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  FindByIdAndUpdate(argument: _project_Request, metadata: grpc.Metadata, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  FindByIdAndUpdate(argument: _project_Request, options: grpc.CallOptions, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  FindByIdAndUpdate(argument: _project_Request, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  findByIdAndUpdate(argument: _project_Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  findByIdAndUpdate(argument: _project_Request, metadata: grpc.Metadata, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  findByIdAndUpdate(argument: _project_Request, options: grpc.CallOptions, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  findByIdAndUpdate(argument: _project_Request, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  
}

export interface ProjectServiceHandlers extends grpc.UntypedServiceImplementation {
  FindByIdAndUpdate: grpc.handleUnaryCall<_project_Request__Output, _project_Project>;
  
}

export interface ProjectServiceDefinition extends grpc.ServiceDefinition {
  FindByIdAndUpdate: MethodDefinition<_project_Request, _project_Project, _project_Request__Output, _project_Project__Output>
}
