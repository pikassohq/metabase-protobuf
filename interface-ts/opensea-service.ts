/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { CancelOrder, CancelStatus } from "./cancel-order";
import { SellNft, Status } from "./sell-order";

export const protobufPackage = "OpenSeaService";

export const OPEN_SEA_SERVICE_PACKAGE_NAME = "OpenSeaService";

export interface OpenSeaServiceClient {
  sellOrder(request: SellNft, ...rest: any): Observable<Status>;

  cancelOrder(request: CancelOrder, ...rest: any): Observable<CancelStatus>;
}

export interface OpenSeaServiceController {
  sellOrder(request: SellNft, ...rest: any): Promise<Status> | Observable<Status> | Status;

  cancelOrder(request: CancelOrder, ...rest: any): Promise<CancelStatus> | Observable<CancelStatus> | CancelStatus;
}

export function OpenSeaServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["sellOrder", "cancelOrder"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("OpenSeaService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("OpenSeaService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const OPEN_SEA_SERVICE_NAME = "OpenSeaService";
