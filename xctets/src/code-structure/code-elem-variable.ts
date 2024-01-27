import { CodeElem } from './code-elem';
import { CodeElemTemplate } from './code-elem-template';
/**
* @class CodeElemVariable
* 
*/

export class CodeElemVariable extends CodeElem {
    vtype: string = "";
    templateType: string = "";
    defaultValue: string = "null";
    construct: boolean = false;
    comment: string = "";
    isVirtual: boolean = false;
    isConst: boolean = false;
    isStatic: boolean = false;
    isPointer: boolean = false;
    passBy: string = "value";
    genSet: boolean = false;
    genGet: boolean = false;
    nullable: boolean = false;
    identity: string = "null";
    isPrimary: boolean = false;
    selectFrom: boolean = false;
    isOptionsList: boolean = false;
    templates: CodeElemTemplate[] = [];
    attribs: string[] = [];
    listType: string = "nil";
    arrayElemCount: number = 0;
    
    constructor(parentElem: CodeElem) {
        super();
    }
}

