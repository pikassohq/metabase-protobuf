/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import {
  GetExecuteEstFeeOutput,
  GetExecuteEstGeeInput,
  GetPublicEstFeeInput,
  GetPublicEstFeeOutput,
} from "./estimate-gas";
import { GetNativeTokenInput, GetNativeTokenOutput } from "./native-token";

export const protobufPackage = "ChainCost";

export const CHAIN_COST_PACKAGE_NAME = "ChainCost";

export interface ChainCostClient {
  getTokenPrice(request: GetNativeTokenInput, ...rest: any): Observable<GetNativeTokenOutput>;

  getPublicEstFee(request: GetPublicEstFeeInput, ...rest: any): Observable<GetPublicEstFeeOutput>;

  getExecuteEstFee(request: GetExecuteEstGeeInput, ...rest: any): Observable<GetExecuteEstFeeOutput>;
}

export interface ChainCostController {
  getTokenPrice(
    request: GetNativeTokenInput,
    ...rest: any
  ): Promise<GetNativeTokenOutput> | Observable<GetNativeTokenOutput> | GetNativeTokenOutput;

  getPublicEstFee(
    request: GetPublicEstFeeInput,
    ...rest: any
  ): Promise<GetPublicEstFeeOutput> | Observable<GetPublicEstFeeOutput> | GetPublicEstFeeOutput;

  getExecuteEstFee(
    request: GetExecuteEstGeeInput,
    ...rest: any
  ): Promise<GetExecuteEstFeeOutput> | Observable<GetExecuteEstFeeOutput> | GetExecuteEstFeeOutput;
}

export function ChainCostControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getTokenPrice", "getPublicEstFee", "getExecuteEstFee"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("ChainCost", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("ChainCost", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const CHAIN_COST_SERVICE_NAME = "ChainCost";
