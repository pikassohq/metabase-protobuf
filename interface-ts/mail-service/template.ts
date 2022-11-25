/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "template";

export interface Template {
  name: string;
  file: string;
  projectId: string;
  secretKey: string;
}

export interface TemplateUpdate {
  id: string;
  name?: string | undefined;
  file?: string | undefined;
  projectId: string;
  secretKey: string;
}

export interface TemplateWithId {
  id: string;
  name: string;
  filePath: string;
  projectId: string;
}

export interface TemplateId {
  id: string;
}

export const TEMPLATE_PACKAGE_NAME = "template";

function createBaseTemplate(): Template {
  return { name: "", file: "", projectId: "", secretKey: "" };
}

export const Template = {
  encode(message: Template, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.file !== "") {
      writer.uint32(18).string(message.file);
    }
    if (message.projectId !== "") {
      writer.uint32(26).string(message.projectId);
    }
    if (message.secretKey !== "") {
      writer.uint32(34).string(message.secretKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Template {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTemplate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.file = reader.string();
          break;
        case 3:
          message.projectId = reader.string();
          break;
        case 4:
          message.secretKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Template {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      file: isSet(object.file) ? String(object.file) : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      secretKey: isSet(object.secretKey) ? String(object.secretKey) : "",
    };
  },

  toJSON(message: Template): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.file !== undefined && (obj.file = message.file);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.secretKey !== undefined && (obj.secretKey = message.secretKey);
    return obj;
  },
};

function createBaseTemplateUpdate(): TemplateUpdate {
  return { id: "", projectId: "", secretKey: "" };
}

export const TemplateUpdate = {
  encode(message: TemplateUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.file !== undefined) {
      writer.uint32(26).string(message.file);
    }
    if (message.projectId !== "") {
      writer.uint32(34).string(message.projectId);
    }
    if (message.secretKey !== "") {
      writer.uint32(42).string(message.secretKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TemplateUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTemplateUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.file = reader.string();
          break;
        case 4:
          message.projectId = reader.string();
          break;
        case 5:
          message.secretKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TemplateUpdate {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : undefined,
      file: isSet(object.file) ? String(object.file) : undefined,
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      secretKey: isSet(object.secretKey) ? String(object.secretKey) : "",
    };
  },

  toJSON(message: TemplateUpdate): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.file !== undefined && (obj.file = message.file);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.secretKey !== undefined && (obj.secretKey = message.secretKey);
    return obj;
  },
};

function createBaseTemplateWithId(): TemplateWithId {
  return { id: "", name: "", filePath: "", projectId: "" };
}

export const TemplateWithId = {
  encode(message: TemplateWithId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.filePath !== "") {
      writer.uint32(26).string(message.filePath);
    }
    if (message.projectId !== "") {
      writer.uint32(34).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TemplateWithId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTemplateWithId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.filePath = reader.string();
          break;
        case 4:
          message.projectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TemplateWithId {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      filePath: isSet(object.filePath) ? String(object.filePath) : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
    };
  },

  toJSON(message: TemplateWithId): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.filePath !== undefined && (obj.filePath = message.filePath);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },
};

function createBaseTemplateId(): TemplateId {
  return { id: "" };
}

export const TemplateId = {
  encode(message: TemplateId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TemplateId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTemplateId();
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

  fromJSON(object: any): TemplateId {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: TemplateId): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
