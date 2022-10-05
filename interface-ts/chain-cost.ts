/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import * as _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";

export const protobufPackage = "ChainCost";

export interface GetNativeTokenInput {
  provider: string;
  chain: string;
}

export interface GetNativeTokenOutput {
  usd: number;
}

export interface GetPublicEstFeeInput {
  chain: string;
  nftUrls: string[];
  amounts: number[];
  collection: collectionProperties | undefined;
  tokenProvider: string;
}

export interface GetPublicEstFeeOutput {
  nativeToken: number;
  deployGas?: estimateGas | undefined;
  mintGas?: estimateGas | undefined;
}

export interface collectionProperties {
  status: string;
  privateKey?: string | undefined;
  publicKey?: string | undefined;
  nftContractAddress?: string | undefined;
  nftType: string;
}

export interface estimateGas {
  unitGas: number;
  gasPrice: number;
  wei: string;
  eth: number;
  usd: number;
  extraWei: string;
  extraUsd: number;
}

export const CHAIN_COST_PACKAGE_NAME = "ChainCost";

function createBaseGetNativeTokenInput(): GetNativeTokenInput {
  return { provider: "", chain: "" };
}

export const GetNativeTokenInput = {
  encode(message: GetNativeTokenInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNativeTokenInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNativeTokenInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        case 2:
          message.chain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNativeTokenInput {
    return {
      provider: isSet(object.provider) ? String(object.provider) : "",
      chain: isSet(object.chain) ? String(object.chain) : "",
    };
  },

  toJSON(message: GetNativeTokenInput): unknown {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = message.provider);
    message.chain !== undefined && (obj.chain = message.chain);
    return obj;
  },
};

function createBaseGetNativeTokenOutput(): GetNativeTokenOutput {
  return { usd: 0 };
}

export const GetNativeTokenOutput = {
  encode(message: GetNativeTokenOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.usd !== 0) {
      writer.uint32(13).float(message.usd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNativeTokenOutput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNativeTokenOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.usd = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNativeTokenOutput {
    return { usd: isSet(object.usd) ? Number(object.usd) : 0 };
  },

  toJSON(message: GetNativeTokenOutput): unknown {
    const obj: any = {};
    message.usd !== undefined && (obj.usd = message.usd);
    return obj;
  },
};

function createBaseGetPublicEstFeeInput(): GetPublicEstFeeInput {
  return { chain: "", nftUrls: [], amounts: [], collection: undefined, tokenProvider: "" };
}

export const GetPublicEstFeeInput = {
  encode(message: GetPublicEstFeeInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    for (const v of message.nftUrls) {
      writer.uint32(18).string(v!);
    }
    writer.uint32(26).fork();
    for (const v of message.amounts) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.collection !== undefined) {
      collectionProperties.encode(message.collection, writer.uint32(34).fork()).ldelim();
    }
    if (message.tokenProvider !== "") {
      writer.uint32(42).string(message.tokenProvider);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPublicEstFeeInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPublicEstFeeInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;
        case 2:
          message.nftUrls.push(reader.string());
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.amounts.push(reader.int32());
            }
          } else {
            message.amounts.push(reader.int32());
          }
          break;
        case 4:
          message.collection = collectionProperties.decode(reader, reader.uint32());
          break;
        case 5:
          message.tokenProvider = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetPublicEstFeeInput {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      nftUrls: Array.isArray(object?.nftUrls) ? object.nftUrls.map((e: any) => String(e)) : [],
      amounts: Array.isArray(object?.amounts) ? object.amounts.map((e: any) => Number(e)) : [],
      collection: isSet(object.collection) ? collectionProperties.fromJSON(object.collection) : undefined,
      tokenProvider: isSet(object.tokenProvider) ? String(object.tokenProvider) : "",
    };
  },

  toJSON(message: GetPublicEstFeeInput): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    if (message.nftUrls) {
      obj.nftUrls = message.nftUrls.map((e) => e);
    } else {
      obj.nftUrls = [];
    }
    if (message.amounts) {
      obj.amounts = message.amounts.map((e) => Math.round(e));
    } else {
      obj.amounts = [];
    }
    message.collection !== undefined &&
      (obj.collection = message.collection ? collectionProperties.toJSON(message.collection) : undefined);
    message.tokenProvider !== undefined && (obj.tokenProvider = message.tokenProvider);
    return obj;
  },
};

function createBaseGetPublicEstFeeOutput(): GetPublicEstFeeOutput {
  return { nativeToken: 0 };
}

export const GetPublicEstFeeOutput = {
  encode(message: GetPublicEstFeeOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nativeToken !== 0) {
      writer.uint32(13).float(message.nativeToken);
    }
    if (message.deployGas !== undefined) {
      estimateGas.encode(message.deployGas, writer.uint32(18).fork()).ldelim();
    }
    if (message.mintGas !== undefined) {
      estimateGas.encode(message.mintGas, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPublicEstFeeOutput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPublicEstFeeOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nativeToken = reader.float();
          break;
        case 2:
          message.deployGas = estimateGas.decode(reader, reader.uint32());
          break;
        case 3:
          message.mintGas = estimateGas.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetPublicEstFeeOutput {
    return {
      nativeToken: isSet(object.nativeToken) ? Number(object.nativeToken) : 0,
      deployGas: isSet(object.deployGas) ? estimateGas.fromJSON(object.deployGas) : undefined,
      mintGas: isSet(object.mintGas) ? estimateGas.fromJSON(object.mintGas) : undefined,
    };
  },

  toJSON(message: GetPublicEstFeeOutput): unknown {
    const obj: any = {};
    message.nativeToken !== undefined && (obj.nativeToken = message.nativeToken);
    message.deployGas !== undefined &&
      (obj.deployGas = message.deployGas ? estimateGas.toJSON(message.deployGas) : undefined);
    message.mintGas !== undefined && (obj.mintGas = message.mintGas ? estimateGas.toJSON(message.mintGas) : undefined);
    return obj;
  },
};

function createBasecollectionProperties(): collectionProperties {
  return { status: "", nftType: "" };
}

export const collectionProperties = {
  encode(message: collectionProperties, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    if (message.privateKey !== undefined) {
      writer.uint32(18).string(message.privateKey);
    }
    if (message.publicKey !== undefined) {
      writer.uint32(26).string(message.publicKey);
    }
    if (message.nftContractAddress !== undefined) {
      writer.uint32(34).string(message.nftContractAddress);
    }
    if (message.nftType !== "") {
      writer.uint32(42).string(message.nftType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): collectionProperties {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasecollectionProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.privateKey = reader.string();
          break;
        case 3:
          message.publicKey = reader.string();
          break;
        case 4:
          message.nftContractAddress = reader.string();
          break;
        case 5:
          message.nftType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): collectionProperties {
    return {
      status: isSet(object.status) ? String(object.status) : "",
      privateKey: isSet(object.privateKey) ? String(object.privateKey) : undefined,
      publicKey: isSet(object.publicKey) ? String(object.publicKey) : undefined,
      nftContractAddress: isSet(object.nftContractAddress) ? String(object.nftContractAddress) : undefined,
      nftType: isSet(object.nftType) ? String(object.nftType) : "",
    };
  },

  toJSON(message: collectionProperties): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    message.privateKey !== undefined && (obj.privateKey = message.privateKey);
    message.publicKey !== undefined && (obj.publicKey = message.publicKey);
    message.nftContractAddress !== undefined && (obj.nftContractAddress = message.nftContractAddress);
    message.nftType !== undefined && (obj.nftType = message.nftType);
    return obj;
  },
};

function createBaseestimateGas(): estimateGas {
  return { unitGas: 0, gasPrice: 0, wei: "", eth: 0, usd: 0, extraWei: "", extraUsd: 0 };
}

export const estimateGas = {
  encode(message: estimateGas, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unitGas !== 0) {
      writer.uint32(8).int32(message.unitGas);
    }
    if (message.gasPrice !== 0) {
      writer.uint32(16).int32(message.gasPrice);
    }
    if (message.wei !== "") {
      writer.uint32(26).string(message.wei);
    }
    if (message.eth !== 0) {
      writer.uint32(37).float(message.eth);
    }
    if (message.usd !== 0) {
      writer.uint32(45).float(message.usd);
    }
    if (message.extraWei !== "") {
      writer.uint32(50).string(message.extraWei);
    }
    if (message.extraUsd !== 0) {
      writer.uint32(61).float(message.extraUsd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): estimateGas {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseestimateGas();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unitGas = reader.int32();
          break;
        case 2:
          message.gasPrice = reader.int32();
          break;
        case 3:
          message.wei = reader.string();
          break;
        case 4:
          message.eth = reader.float();
          break;
        case 5:
          message.usd = reader.float();
          break;
        case 6:
          message.extraWei = reader.string();
          break;
        case 7:
          message.extraUsd = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): estimateGas {
    return {
      unitGas: isSet(object.unitGas) ? Number(object.unitGas) : 0,
      gasPrice: isSet(object.gasPrice) ? Number(object.gasPrice) : 0,
      wei: isSet(object.wei) ? String(object.wei) : "",
      eth: isSet(object.eth) ? Number(object.eth) : 0,
      usd: isSet(object.usd) ? Number(object.usd) : 0,
      extraWei: isSet(object.extraWei) ? String(object.extraWei) : "",
      extraUsd: isSet(object.extraUsd) ? Number(object.extraUsd) : 0,
    };
  },

  toJSON(message: estimateGas): unknown {
    const obj: any = {};
    message.unitGas !== undefined && (obj.unitGas = Math.round(message.unitGas));
    message.gasPrice !== undefined && (obj.gasPrice = Math.round(message.gasPrice));
    message.wei !== undefined && (obj.wei = message.wei);
    message.eth !== undefined && (obj.eth = message.eth);
    message.usd !== undefined && (obj.usd = message.usd);
    message.extraWei !== undefined && (obj.extraWei = message.extraWei);
    message.extraUsd !== undefined && (obj.extraUsd = message.extraUsd);
    return obj;
  },
};

export interface ChainCostClient {
  getTokenPrice(request: GetNativeTokenInput, ...rest: any): Observable<GetNativeTokenOutput>;

  getPublicEstFee(request: GetPublicEstFeeInput, ...rest: any): Observable<GetPublicEstFeeOutput>;
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
}

export function ChainCostControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getTokenPrice", "getPublicEstFee"];
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
