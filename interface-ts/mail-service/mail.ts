/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "mail";

export interface payload {
  to: string;
  subject: string;
  context?: string | undefined;
  templateId?: string | undefined;
  projectId: string;
  providerId?: string | undefined;
  secretKey: string;
  from: string;
}

export interface status {
  response: string;
}

export interface Types {
  str?: string | undefined;
  dou?: number | undefined;
}

export const MAIL_PACKAGE_NAME = "mail";

function createBasepayload(): payload {
  return { to: "", subject: "", projectId: "", secretKey: "", from: "" };
}

export const payload = {
  encode(message: payload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.to !== "") {
      writer.uint32(10).string(message.to);
    }
    if (message.subject !== "") {
      writer.uint32(18).string(message.subject);
    }
    if (message.context !== undefined) {
      writer.uint32(26).string(message.context);
    }
    if (message.templateId !== undefined) {
      writer.uint32(34).string(message.templateId);
    }
    if (message.projectId !== "") {
      writer.uint32(42).string(message.projectId);
    }
    if (message.providerId !== undefined) {
      writer.uint32(50).string(message.providerId);
    }
    if (message.secretKey !== "") {
      writer.uint32(58).string(message.secretKey);
    }
    if (message.from !== "") {
      writer.uint32(66).string(message.from);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): payload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasepayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.to = reader.string();
          break;
        case 2:
          message.subject = reader.string();
          break;
        case 3:
          message.context = reader.string();
          break;
        case 4:
          message.templateId = reader.string();
          break;
        case 5:
          message.projectId = reader.string();
          break;
        case 6:
          message.providerId = reader.string();
          break;
        case 7:
          message.secretKey = reader.string();
          break;
        case 8:
          message.from = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): payload {
    return {
      to: isSet(object.to) ? String(object.to) : "",
      subject: isSet(object.subject) ? String(object.subject) : "",
      context: isSet(object.context) ? String(object.context) : undefined,
      templateId: isSet(object.templateId) ? String(object.templateId) : undefined,
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      providerId: isSet(object.providerId) ? String(object.providerId) : undefined,
      secretKey: isSet(object.secretKey) ? String(object.secretKey) : "",
      from: isSet(object.from) ? String(object.from) : "",
    };
  },

  toJSON(message: payload): unknown {
    const obj: any = {};
    message.to !== undefined && (obj.to = message.to);
    message.subject !== undefined && (obj.subject = message.subject);
    message.context !== undefined && (obj.context = message.context);
    message.templateId !== undefined && (obj.templateId = message.templateId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.providerId !== undefined && (obj.providerId = message.providerId);
    message.secretKey !== undefined && (obj.secretKey = message.secretKey);
    message.from !== undefined && (obj.from = message.from);
    return obj;
  },
};

function createBasestatus(): status {
  return { response: "" };
}

export const status = {
  encode(message: status, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== "") {
      writer.uint32(10).string(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): status {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasestatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): status {
    return { response: isSet(object.response) ? String(object.response) : "" };
  },

  toJSON(message: status): unknown {
    const obj: any = {};
    message.response !== undefined && (obj.response = message.response);
    return obj;
  },
};

function createBaseTypes(): Types {
  return {};
}

export const Types = {
  encode(message: Types, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.str !== undefined) {
      writer.uint32(10).string(message.str);
    }
    if (message.dou !== undefined) {
      writer.uint32(17).double(message.dou);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Types {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTypes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.str = reader.string();
          break;
        case 2:
          message.dou = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Types {
    return {
      str: isSet(object.str) ? String(object.str) : undefined,
      dou: isSet(object.dou) ? Number(object.dou) : undefined,
    };
  },

  toJSON(message: Types): unknown {
    const obj: any = {};
    message.str !== undefined && (obj.str = message.str);
    message.dou !== undefined && (obj.dou = message.dou);
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
