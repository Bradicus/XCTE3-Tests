/* 
* Copyright XCTE Contributors
* This file is released under the zlib/libpng license, see license.txt in the
* root directory
*/

import { CodeElem } from './code-elem';
import { CodeElemType } from './code-elem-type';
import { CodeElemVariable } from './code-elem-variable';

/**
* @class CodeElemVarGroup
* 
*/
export class CodeElemVarGroup extends CodeElem {
    element_id: CodeElemType = CodeElemType.ELEM_VAR_GROUP;
    name: string | null = null;
    vars: CodeElemVariable[] = [];
    varGroups: CodeElemVarGroup[] = [];
}

