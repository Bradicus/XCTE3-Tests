/**
* @class CodeElemVariable
* 
*/

export class CodeElemVariable {
    vtype: string;
    templateType: string;
    defaultValue: string;
    construct: string;
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
    listType: string = "nil";
    arrayElemCount: number = 0;
}

