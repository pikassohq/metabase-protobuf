/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { AddCardInput, AddCardResponse } from "./add-card";
import { Balance, BalanceInput } from "./balance";
import { DepositInput, DepositResponse } from "./deposit";
import { TransferInput, TransferResponse } from "./transfer";
import { Wallet, WalletInput } from "./wallet";

export const protobufPackage = "WalletService";

export const WALLET_SERVICE_PACKAGE_NAME = "WalletService";

export interface WalletServiceClient {
  createWallet(request: WalletInput, ...rest: any): Observable<Wallet>;

  getBalance(request: BalanceInput, ...rest: any): Observable<Balance>;

  depositWallet(request: DepositInput, ...rest: any): Observable<DepositResponse>;

  transferFund(request: TransferInput, ...rest: any): Observable<TransferResponse>;

  getWallet(request: WalletInput, ...rest: any): Observable<Wallet>;

  addCardToLinkAccount(request: AddCardInput, ...rest: any): Observable<AddCardResponse>;
}

export interface WalletServiceController {
  createWallet(request: WalletInput, ...rest: any): Promise<Wallet> | Observable<Wallet> | Wallet;

  getBalance(request: BalanceInput, ...rest: any): Promise<Balance> | Observable<Balance> | Balance;

  depositWallet(
    request: DepositInput,
    ...rest: any
  ): Promise<DepositResponse> | Observable<DepositResponse> | DepositResponse;

  transferFund(
    request: TransferInput,
    ...rest: any
  ): Promise<TransferResponse> | Observable<TransferResponse> | TransferResponse;

  getWallet(request: WalletInput, ...rest: any): Promise<Wallet> | Observable<Wallet> | Wallet;

  addCardToLinkAccount(
    request: AddCardInput,
    ...rest: any
  ): Promise<AddCardResponse> | Observable<AddCardResponse> | AddCardResponse;
}

export function WalletServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "createWallet",
      "getBalance",
      "depositWallet",
      "transferFund",
      "getWallet",
      "addCardToLinkAccount",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("WalletService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("WalletService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const WALLET_SERVICE_NAME = "WalletService";
