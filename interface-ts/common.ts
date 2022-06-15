/* eslint-disable */
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';

export const protobufPackage = 'common';

export enum NullValue {
  /** NULL_VALUE - Null value. */
  NULL_VALUE = 'NULL_VALUE',
  UNRECOGNIZED = 'UNRECOGNIZED',
}

export function nullValueFromJSON(object: any): NullValue {
  switch (object) {
    case 0:
    case 'NULL_VALUE':
      return NullValue.NULL_VALUE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return NullValue.UNRECOGNIZED;
  }
}

export function nullValueToJSON(object: NullValue): string {
  switch (object) {
    case NullValue.NULL_VALUE:
      return 'NULL_VALUE';
    case NullValue.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Struct {
  fields: { [key: string]: Value };
}

export interface Struct_FieldsEntry {
  key: string;
  value: Value | undefined;
}

export interface Value {
  /** Represents a null value. */
  nullValue: NullValue | undefined;
  /** Represents a double value. */
  numberValue: number | undefined;
  /** Represents a string value. */
  stringValue: string | undefined;
  /** Represents a boolean value. */
  boolValue: boolean | undefined;
  /** Represents a structured value. */
  structValue: Struct | undefined;
  /** Represents a repeated `Value`. */
  listValue: ListValue | undefined;
}

export interface ListValue {
  /** Repeated field of dynamically typed values. */
  values: Value[];
}

export const COMMON_PACKAGE_NAME = 'common';

function createBaseStruct(): Struct {
  return { fields: {} };
}

export const Struct = {
  fromJSON(object: any): Struct {
    return {
      fields: isObject(object.fields)
        ? Object.entries(object.fields).reduce<{ [key: string]: Value }>((acc, [key, value]) => {
            acc[key] = Value.fromJSON(value);
            return acc;
          }, {})
        : {},
    };
  },

  toJSON(message: Struct): unknown {
    const obj: any = {};
    obj.fields = {};
    if (message.fields) {
      Object.entries(message.fields).forEach(([k, v]) => {
        obj.fields[k] = Value.toJSON(v);
      });
    }
    return obj;
  },
};

function createBaseStruct_FieldsEntry(): Struct_FieldsEntry {
  return { key: '', value: undefined };
}

export const Struct_FieldsEntry = {
  fromJSON(object: any): Struct_FieldsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value) ? Value.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Struct_FieldsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? Value.toJSON(message.value) : undefined);
    return obj;
  },
};

function createBaseValue(): Value {
  return {
    nullValue: undefined,
    numberValue: undefined,
    stringValue: undefined,
    boolValue: undefined,
    structValue: undefined,
    listValue: undefined,
  };
}

export const Value = {
  fromJSON(object: any): Value {
    return {
      nullValue: isSet(object.nullValue) ? nullValueFromJSON(object.nullValue) : undefined,
      numberValue: isSet(object.numberValue) ? Number(object.numberValue) : undefined,
      stringValue: isSet(object.stringValue) ? String(object.stringValue) : undefined,
      boolValue: isSet(object.boolValue) ? Boolean(object.boolValue) : undefined,
      structValue: isSet(object.structValue) ? Struct.fromJSON(object.structValue) : undefined,
      listValue: isSet(object.listValue) ? ListValue.fromJSON(object.listValue) : undefined,
    };
  },

  toJSON(message: Value): unknown {
    const obj: any = {};
    message.nullValue !== undefined &&
      (obj.nullValue = message.nullValue !== undefined ? nullValueToJSON(message.nullValue) : undefined);
    message.numberValue !== undefined && (obj.numberValue = message.numberValue);
    message.stringValue !== undefined && (obj.stringValue = message.stringValue);
    message.boolValue !== undefined && (obj.boolValue = message.boolValue);
    message.structValue !== undefined &&
      (obj.structValue = message.structValue ? Struct.toJSON(message.structValue) : undefined);
    message.listValue !== undefined &&
      (obj.listValue = message.listValue ? ListValue.toJSON(message.listValue) : undefined);
    return obj;
  },
};

function createBaseListValue(): ListValue {
  return { values: [] };
}

export const ListValue = {
  fromJSON(object: any): ListValue {
    return {
      values: Array.isArray(object?.values) ? object.values.map((e: any) => Value.fromJSON(e)) : [],
    };
  },

  toJSON(message: ListValue): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) => (e ? Value.toJSON(e) : undefined));
    } else {
      obj.values = [];
    }
    return obj;
  },
};

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === 'object' && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
