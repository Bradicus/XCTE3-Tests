/* 
* Copyright XCTE Contributors
* This file is released under the zlib/libpng license, see license.txt in the
* root directory
*/

import { CodeElem } from './code-elem';
import { CodeElemVariable } from './code-elem-variable';

/**
* @class CodeElemVarGroup
* 
*/
export class CodeElemVarGroup extends CodeElem {
    name: string | null = null;
    vars: CodeElemVariable[] = [];
    varGroups: CodeElemVarGroup[] = [];
}

