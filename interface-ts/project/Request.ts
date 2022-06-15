// Original file: src/protobuf/project.proto

import type { Project as _project_Project, Project__Output as _project_Project__Output } from '../project/Project';

export interface Request {
  'id'?: (string);
  'update'?: (_project_Project | null);
}

export interface Request__Output {
  'id': (string);
  'update': (_project_Project__Output | null);
}
