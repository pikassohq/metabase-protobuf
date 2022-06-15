/* eslint-disable */
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';

export const protobufPackage = 'common';

export enum NullValue {
  /** NULL_VALUE - Null value. */
  NULL_VALUE = 'NULL_VALUE',
  UNRECOGNIZED = 'UNRECOGNIZED',
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

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
