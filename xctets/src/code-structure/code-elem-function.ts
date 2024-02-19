/* 
* Copyright XCTE Contributors
* This file is released under the zlib/libpng license, see license.txt in the
* root directory
*/

import { CodeElem } from './code-elem';
import { CodeElemVarGroup } from './code-elem-var-group';
import { CodeElemVariable } from './code-elem-variable';

/**
* @class CodeElemFunction
* 
*/
export class CodeElemFunction extends CodeElem {
    parameters: CodeElemVarGroup = new CodeElemVarGroup(this);
    isConst: boolean = false;
    isStatic: boolean = false;
    isVirtual: boolean = false;
    isInline: boolean = false;
    isTemplate: boolean = false;
    annotations: string[] = [];
    returnValue: CodeElemVariable = new CodeElemVariable(this);
}

