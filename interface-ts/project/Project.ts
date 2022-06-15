// Original file: src/protobuf/project.proto


export interface Project {
  'id'?: (number);
  'name'?: (string);
  'description'?: (string);
  'chain'?: (string);
  'masterAddress'?: (string);
  'masterPrivateKey'?: (string);
  'contract721Address'?: (string);
  'l1Mnemonic'?: (string);
  'image'?: (string);
  'blockchain'?: (string);
  'status'?: (string);
  'apiSecret'?: (string);
}

export interface Project__Output {
  'id': (number);
  'name': (string);
  'description': (string);
  'chain': (string);
  'masterAddress': (string);
  'masterPrivateKey': (string);
  'contract721Address': (string);
  'l1Mnemonic': (string);
  'image': (string);
  'blockchain': (string);
  'status': (string);
  'apiSecret': (string);
}
