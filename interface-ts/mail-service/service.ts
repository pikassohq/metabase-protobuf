/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { payload, status } from "./mail";
import { Project, ProjectId, ProjectUpdate, ProjectWithId } from "./project";
import { Provider, ProviderId, ProviderUpdate, ProviderWithId } from "./provider";
import { Template, TemplateId, TemplateUpdate, TemplateWithId } from "./template";

export const protobufPackage = "MailService";

export const MAIL_SERVICE_PACKAGE_NAME = "MailService";

export interface MailServiceClient {
  /** Mail */

  sendMail(request: payload, ...rest: any): Observable<status>;

  /** Template */

  templateCreate(request: Template, ...rest: any): Observable<TemplateWithId>;

  templateUpdate(request: TemplateUpdate, ...rest: any): Observable<TemplateWithId>;

  templateFindOneById(request: TemplateId, ...rest: any): Observable<TemplateWithId>;

  templateDelete(request: TemplateId, ...rest: any): Observable<TemplateWithId>;

  /** Provider */

  providerCreate(request: Provider, ...rest: any): Observable<ProviderWithId>;

  providerUpdate(request: ProviderUpdate, ...rest: any): Observable<ProviderWithId>;

  providerFindOneById(request: ProviderId, ...rest: any): Observable<ProviderWithId>;

  /** Project */

  projectCreate(request: Project, ...rest: any): Observable<ProjectWithId>;

  projectUpdate(request: ProjectUpdate, ...rest: any): Observable<ProjectWithId>;

  projectFindOneById(request: ProjectId, ...rest: any): Observable<ProjectWithId>;

  projectDelete(request: ProjectId, ...rest: any): Observable<ProjectWithId>;
}

export interface MailServiceController {
  /** Mail */

  sendMail(request: payload, ...rest: any): Promise<status> | Observable<status> | status;

  /** Template */

  templateCreate(
    request: Template,
    ...rest: any
  ): Promise<TemplateWithId> | Observable<TemplateWithId> | TemplateWithId;

  templateUpdate(
    request: TemplateUpdate,
    ...rest: any
  ): Promise<TemplateWithId> | Observable<TemplateWithId> | TemplateWithId;

  templateFindOneById(
    request: TemplateId,
    ...rest: any
  ): Promise<TemplateWithId> | Observable<TemplateWithId> | TemplateWithId;

  templateDelete(
    request: TemplateId,
    ...rest: any
  ): Promise<TemplateWithId> | Observable<TemplateWithId> | TemplateWithId;

  /** Provider */

  providerCreate(
    request: Provider,
    ...rest: any
  ): Promise<ProviderWithId> | Observable<ProviderWithId> | ProviderWithId;

  providerUpdate(
    request: ProviderUpdate,
    ...rest: any
  ): Promise<ProviderWithId> | Observable<ProviderWithId> | ProviderWithId;

  providerFindOneById(
    request: ProviderId,
    ...rest: any
  ): Promise<ProviderWithId> | Observable<ProviderWithId> | ProviderWithId;

  /** Project */

  projectCreate(request: Project, ...rest: any): Promise<ProjectWithId> | Observable<ProjectWithId> | ProjectWithId;

  projectUpdate(
    request: ProjectUpdate,
    ...rest: any
  ): Promise<ProjectWithId> | Observable<ProjectWithId> | ProjectWithId;

  projectFindOneById(
    request: ProjectId,
    ...rest: any
  ): Promise<ProjectWithId> | Observable<ProjectWithId> | ProjectWithId;

  projectDelete(request: ProjectId, ...rest: any): Promise<ProjectWithId> | Observable<ProjectWithId> | ProjectWithId;
}

export function MailServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "sendMail",
      "templateCreate",
      "templateUpdate",
      "templateFindOneById",
      "templateDelete",
      "providerCreate",
      "providerUpdate",
      "providerFindOneById",
      "projectCreate",
      "projectUpdate",
      "projectFindOneById",
      "projectDelete",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("MailService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("MailService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const MAIL_SERVICE_NAME = "MailService";
