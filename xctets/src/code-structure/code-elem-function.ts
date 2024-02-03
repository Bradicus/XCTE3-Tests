/* 
* Copyright XCTE Contributors
* This file is released under the zlib/libpng license, see license.txt in the
* root directory
*/

import { CodeElem } from './code-elem';
import { CodeElemType } from './code-elem-type';
import { CodeElemVarGroup } from './code-elem-var-group';
import { CodeElemVariable } from './code-elem-variable';

/**
* @class CodeElemFunction
* 
*/
export class CodeElemFunction extends CodeElem {
    element_id: CodeElemType = CodeElemType.ELEM_FUNCTION;
    parameters: CodeElemVarGroup = new CodeElemVarGroup();
    isConst: boolean = false;
    isStatic: boolean = false;
    isVirtual: boolean = false;
    isInline: boolean = false;
    isTemplate: boolean = false;
    annotations: string[] = [];
    returnValue: CodeElemVariable = new CodeElemVariable(this);
}

