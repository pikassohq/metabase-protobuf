// Original file: src/protobuf/common.proto

import type { NullValue as _common_NullValue } from '../common/NullValue';
import type { Struct as _common_Struct, Struct__Output as _common_Struct__Output } from '../common/Struct';
import type { ListValue as _common_ListValue, ListValue__Output as _common_ListValue__Output } from '../common/ListValue';

export interface Value {
  'nullValue'?: (_common_NullValue | keyof typeof _common_NullValue);
  'numberValue'?: (number | string);
  'stringValue'?: (string);
  'boolValue'?: (boolean);
  'structValue'?: (_common_Struct | null);
  'listValue'?: (_common_ListValue | null);
  'kind'?: "nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue";
}

export interface Value__Output {
  'nullValue'?: (_common_NullValue);
  'numberValue'?: (number);
  'stringValue'?: (string);
  'boolValue'?: (boolean);
  'structValue'?: (_common_Struct__Output | null);
  'listValue'?: (_common_ListValue__Output | null);
}
