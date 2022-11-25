/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "MailProject";

export interface Project {
  name: string;
  secretKey: string;
}

export interface ProjectUpdate {
  id: string;
  name?: string | undefined;
  secretKey: string;
}

export interface ProjectWithId {
  id: string;
  name: string;
  secretKey: string;
}

export interface ProjectId {
  id: string;
}

export const MAIL_PROJECT_PACKAGE_NAME = "MailProject";

function createBaseProject(): Project {
  return { name: "", secretKey: "" };
}

export const Project = {
  encode(message: Project, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.secretKey !== "") {
      writer.uint32(18).string(message.secretKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Project {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.secretKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Project {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      secretKey: isSet(object.secretKey) ? String(object.secretKey) : "",
    };
  },

  toJSON(message: Project): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.secretKey !== undefined && (obj.secretKey = message.secretKey);
    return obj;
  },
};

function createBaseProjectUpdate(): ProjectUpdate {
  return { id: "", secretKey: "" };
}

export const ProjectUpdate = {
  encode(message: ProjectUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.secretKey !== "") {
      writer.uint32(26).string(message.secretKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectUpdate();
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
          message.secretKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectUpdate {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : undefined,
      secretKey: isSet(object.secretKey) ? String(object.secretKey) : "",
    };
  },

  toJSON(message: ProjectUpdate): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.secretKey !== undefined && (obj.secretKey = message.secretKey);
    return obj;
  },
};

function createBaseProjectWithId(): ProjectWithId {
  return { id: "", name: "", secretKey: "" };
}

export const ProjectWithId = {
  encode(message: ProjectWithId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.secretKey !== "") {
      writer.uint32(26).string(message.secretKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectWithId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectWithId();
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
          message.secretKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectWithId {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      secretKey: isSet(object.secretKey) ? String(object.secretKey) : "",
    };
  },

  toJSON(message: ProjectWithId): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.secretKey !== undefined && (obj.secretKey = message.secretKey);
    return obj;
  },
};

function createBaseProjectId(): ProjectId {
  return { id: "" };
}

export const ProjectId = {
  encode(message: ProjectId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectId();
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

  fromJSON(object: any): ProjectId {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: ProjectId): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
