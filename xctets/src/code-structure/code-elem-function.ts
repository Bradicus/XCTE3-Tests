import { CodeElem } from './code-elem';
import { CodeElemVarGroup } from './code-elem-var-group';
import { CodeElemVariable } from './code-elem-variable';
/**
* @class CodeElemFunction
* 
*/

export class CodeElemFunction extends CodeElem {
    elementId: string = "CodeElem::ELEM_FUNCTION";
    parameters: CodeElemVarGroup = new CodeElemVarGroup();
    isConst: boolean = false;
    isStatic: boolean = false;
    isVirtual: boolean = false;
    isInline: boolean = false;
    isTemplate: boolean = false;
    annotations: string[] = [];
    returnValue: CodeElemVariable = new CodeElemVariable(self);
}
