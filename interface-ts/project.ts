import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { ProjectServiceClient as _project_ProjectServiceClient, ProjectServiceDefinition as _project_ProjectServiceDefinition } from './project/ProjectService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  common: {
    ListValue: MessageTypeDefinition
    NullValue: EnumTypeDefinition
    Struct: MessageTypeDefinition
    Value: MessageTypeDefinition
  }
  project: {
    Project: MessageTypeDefinition
    ProjectService: SubtypeConstructor<typeof grpc.Client, _project_ProjectServiceClient> & { service: _project_ProjectServiceDefinition }
    Request: MessageTypeDefinition
  }
}

