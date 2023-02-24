/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "provider";

export interface Provider {
  config: string;
  name: string;
}

export interface ProviderUpdate {
  id: string;
  config?: string | undefined;
  name?: string | undefined;
}

export interface ProviderWithId {
  id: string;
  config: string;
  name: string;
  deleted: string;
}

export interface ProviderId {
  id: string;
}

export const PROVIDER_PACKAGE_NAME = "provider";

function createBaseProvider(): Provider {
  return { config: "", name: "" };
}

export const Provider = {
  encode(message: Provider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== "") {
      writer.uint32(10).string(message.config);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Provider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Provider {
    return {
      config: isSet(object.config) ? String(object.config) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: Provider): unknown {
    const obj: any = {};
    message.config !== undefined && (obj.config = message.config);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
};

function createBaseProviderUpdate(): ProviderUpdate {
  return { id: "" };
}

export const ProviderUpdate = {
  encode(message: ProviderUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.config !== undefined) {
      writer.uint32(18).string(message.config);
    }
    if (message.name !== undefined) {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.config = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProviderUpdate {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      config: isSet(object.config) ? String(object.config) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
    };
  },

  toJSON(message: ProviderUpdate): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.config !== undefined && (obj.config = message.config);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
};

function createBaseProviderWithId(): ProviderWithId {
  return { id: "", config: "", name: "", deleted: "" };
}

export const ProviderWithId = {
  encode(message: ProviderWithId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.config !== "") {
      writer.uint32(18).string(message.config);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.deleted !== "") {
      writer.uint32(34).string(message.deleted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderWithId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderWithId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.config = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.deleted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProviderWithId {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      config: isSet(object.config) ? String(object.config) : "",
      name: isSet(object.name) ? String(object.name) : "",
      deleted: isSet(object.deleted) ? String(object.deleted) : "",
    };
  },

  toJSON(message: ProviderWithId): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.config !== undefined && (obj.config = message.config);
    message.name !== undefined && (obj.name = message.name);
    message.deleted !== undefined && (obj.deleted = message.deleted);
    return obj;
  },
};

function createBaseProviderId(): ProviderId {
  return { id: "" };
}

export const ProviderId = {
  encode(message: ProviderId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProviderId {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: ProviderId): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
