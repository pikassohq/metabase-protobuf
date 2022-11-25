/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "SellOrder";

export interface SellNft {
  tokenAddress: string;
  tokenId: string;
  startAmount: string;
  endAmount?: string | undefined;
  expirationTime?: string | undefined;
  listingTime?: string | undefined;
  accountAddress: string;
  privateKey: string;
}

export interface AssetContract {
  name: string;
  description?: string | undefined;
  type: string;
  schemaName: string;
  address: string;
  tokenSymbol: string;
}

export interface Collection {
  name: string;
  slug: string;
}

export interface Asset {
  tokenId: string;
  tokenAddress: string;
  name: string;
  description: string;
  assetContract: AssetContract | undefined;
  collection: Collection | undefined;
  imageUrl: string;
  openseaLink: string;
}

export interface Status {
  createdDate: string;
  closingDate: string;
  listingTime: number;
  expirationTime: number;
  orderHash: string;
  side: string;
  orderType: string;
  asset: Asset | undefined;
}

export const SELL_ORDER_PACKAGE_NAME = "SellOrder";

function createBaseSellNft(): SellNft {
  return { tokenAddress: "", tokenId: "", startAmount: "", accountAddress: "", privateKey: "" };
}

export const SellNft = {
  encode(message: SellNft, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenAddress !== "") {
      writer.uint32(10).string(message.tokenAddress);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    if (message.startAmount !== "") {
      writer.uint32(26).string(message.startAmount);
    }
    if (message.endAmount !== undefined) {
      writer.uint32(34).string(message.endAmount);
    }
    if (message.expirationTime !== undefined) {
      writer.uint32(42).string(message.expirationTime);
    }
    if (message.listingTime !== undefined) {
      writer.uint32(50).string(message.listingTime);
    }
    if (message.accountAddress !== "") {
      writer.uint32(58).string(message.accountAddress);
    }
    if (message.privateKey !== "") {
      writer.uint32(66).string(message.privateKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SellNft {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSellNft();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenAddress = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        case 3:
          message.startAmount = reader.string();
          break;
        case 4:
          message.endAmount = reader.string();
          break;
        case 5:
          message.expirationTime = reader.string();
          break;
        case 6:
          message.listingTime = reader.string();
          break;
        case 7:
          message.accountAddress = reader.string();
          break;
        case 8:
          message.privateKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SellNft {
    return {
      tokenAddress: isSet(object.tokenAddress) ? String(object.tokenAddress) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      startAmount: isSet(object.startAmount) ? String(object.startAmount) : "",
      endAmount: isSet(object.endAmount) ? String(object.endAmount) : undefined,
      expirationTime: isSet(object.expirationTime) ? String(object.expirationTime) : undefined,
      listingTime: isSet(object.listingTime) ? String(object.listingTime) : undefined,
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
      privateKey: isSet(object.privateKey) ? String(object.privateKey) : "",
    };
  },

  toJSON(message: SellNft): unknown {
    const obj: any = {};
    message.tokenAddress !== undefined && (obj.tokenAddress = message.tokenAddress);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.startAmount !== undefined && (obj.startAmount = message.startAmount);
    message.endAmount !== undefined && (obj.endAmount = message.endAmount);
    message.expirationTime !== undefined && (obj.expirationTime = message.expirationTime);
    message.listingTime !== undefined && (obj.listingTime = message.listingTime);
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    message.privateKey !== undefined && (obj.privateKey = message.privateKey);
    return obj;
  },
};

function createBaseAssetContract(): AssetContract {
  return { name: "", type: "", schemaName: "", address: "", tokenSymbol: "" };
}

export const AssetContract = {
  encode(message: AssetContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    if (message.schemaName !== "") {
      writer.uint32(34).string(message.schemaName);
    }
    if (message.address !== "") {
      writer.uint32(42).string(message.address);
    }
    if (message.tokenSymbol !== "") {
      writer.uint32(50).string(message.tokenSymbol);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.type = reader.string();
          break;
        case 4:
          message.schemaName = reader.string();
          break;
        case 5:
          message.address = reader.string();
          break;
        case 6:
          message.tokenSymbol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetContract {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : undefined,
      type: isSet(object.type) ? String(object.type) : "",
      schemaName: isSet(object.schemaName) ? String(object.schemaName) : "",
      address: isSet(object.address) ? String(object.address) : "",
      tokenSymbol: isSet(object.tokenSymbol) ? String(object.tokenSymbol) : "",
    };
  },

  toJSON(message: AssetContract): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.type !== undefined && (obj.type = message.type);
    message.schemaName !== undefined && (obj.schemaName = message.schemaName);
    message.address !== undefined && (obj.address = message.address);
    message.tokenSymbol !== undefined && (obj.tokenSymbol = message.tokenSymbol);
    return obj;
  },
};

function createBaseCollection(): Collection {
  return { name: "", slug: "" };
}

export const Collection = {
  encode(message: Collection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.slug !== "") {
      writer.uint32(18).string(message.slug);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Collection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.slug = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Collection {
    return { name: isSet(object.name) ? String(object.name) : "", slug: isSet(object.slug) ? String(object.slug) : "" };
  },

  toJSON(message: Collection): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.slug !== undefined && (obj.slug = message.slug);
    return obj;
  },
};

function createBaseAsset(): Asset {
  return {
    tokenId: "",
    tokenAddress: "",
    name: "",
    description: "",
    assetContract: undefined,
    collection: undefined,
    imageUrl: "",
    openseaLink: "",
  };
}

export const Asset = {
  encode(message: Asset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenId !== "") {
      writer.uint32(10).string(message.tokenId);
    }
    if (message.tokenAddress !== "") {
      writer.uint32(18).string(message.tokenAddress);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.assetContract !== undefined) {
      AssetContract.encode(message.assetContract, writer.uint32(42).fork()).ldelim();
    }
    if (message.collection !== undefined) {
      Collection.encode(message.collection, writer.uint32(50).fork()).ldelim();
    }
    if (message.imageUrl !== "") {
      writer.uint32(58).string(message.imageUrl);
    }
    if (message.openseaLink !== "") {
      writer.uint32(66).string(message.openseaLink);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Asset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId = reader.string();
          break;
        case 2:
          message.tokenAddress = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.assetContract = AssetContract.decode(reader, reader.uint32());
          break;
        case 6:
          message.collection = Collection.decode(reader, reader.uint32());
          break;
        case 7:
          message.imageUrl = reader.string();
          break;
        case 8:
          message.openseaLink = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Asset {
    return {
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      tokenAddress: isSet(object.tokenAddress) ? String(object.tokenAddress) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      assetContract: isSet(object.assetContract) ? AssetContract.fromJSON(object.assetContract) : undefined,
      collection: isSet(object.collection) ? Collection.fromJSON(object.collection) : undefined,
      imageUrl: isSet(object.imageUrl) ? String(object.imageUrl) : "",
      openseaLink: isSet(object.openseaLink) ? String(object.openseaLink) : "",
    };
  },

  toJSON(message: Asset): unknown {
    const obj: any = {};
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.tokenAddress !== undefined && (obj.tokenAddress = message.tokenAddress);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.assetContract !== undefined &&
      (obj.assetContract = message.assetContract ? AssetContract.toJSON(message.assetContract) : undefined);
    message.collection !== undefined &&
      (obj.collection = message.collection ? Collection.toJSON(message.collection) : undefined);
    message.imageUrl !== undefined && (obj.imageUrl = message.imageUrl);
    message.openseaLink !== undefined && (obj.openseaLink = message.openseaLink);
    return obj;
  },
};

function createBaseStatus(): Status {
  return {
    createdDate: "",
    closingDate: "",
    listingTime: 0,
    expirationTime: 0,
    orderHash: "",
    side: "",
    orderType: "",
    asset: undefined,
  };
}

export const Status = {
  encode(message: Status, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.createdDate !== "") {
      writer.uint32(10).string(message.createdDate);
    }
    if (message.closingDate !== "") {
      writer.uint32(18).string(message.closingDate);
    }
    if (message.listingTime !== 0) {
      writer.uint32(24).int32(message.listingTime);
    }
    if (message.expirationTime !== 0) {
      writer.uint32(32).int32(message.expirationTime);
    }
    if (message.orderHash !== "") {
      writer.uint32(42).string(message.orderHash);
    }
    if (message.side !== "") {
      writer.uint32(50).string(message.side);
    }
    if (message.orderType !== "") {
      writer.uint32(58).string(message.orderType);
    }
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Status {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.createdDate = reader.string();
          break;
        case 2:
          message.closingDate = reader.string();
          break;
        case 3:
          message.listingTime = reader.int32();
          break;
        case 4:
          message.expirationTime = reader.int32();
          break;
        case 5:
          message.orderHash = reader.string();
          break;
        case 6:
          message.side = reader.string();
          break;
        case 7:
          message.orderType = reader.string();
          break;
        case 8:
          message.asset = Asset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Status {
    return {
      createdDate: isSet(object.createdDate) ? String(object.createdDate) : "",
      closingDate: isSet(object.closingDate) ? String(object.closingDate) : "",
      listingTime: isSet(object.listingTime) ? Number(object.listingTime) : 0,
      expirationTime: isSet(object.expirationTime) ? Number(object.expirationTime) : 0,
      orderHash: isSet(object.orderHash) ? String(object.orderHash) : "",
      side: isSet(object.side) ? String(object.side) : "",
      orderType: isSet(object.orderType) ? String(object.orderType) : "",
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
    };
  },

  toJSON(message: Status): unknown {
    const obj: any = {};
    message.createdDate !== undefined && (obj.createdDate = message.createdDate);
    message.closingDate !== undefined && (obj.closingDate = message.closingDate);
    message.listingTime !== undefined && (obj.listingTime = Math.round(message.listingTime));
    message.expirationTime !== undefined && (obj.expirationTime = Math.round(message.expirationTime));
    message.orderHash !== undefined && (obj.orderHash = message.orderHash);
    message.side !== undefined && (obj.side = message.side);
    message.orderType !== undefined && (obj.orderType = message.orderType);
    message.asset !== undefined && (obj.asset = message.asset ? Asset.toJSON(message.asset) : undefined);
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
