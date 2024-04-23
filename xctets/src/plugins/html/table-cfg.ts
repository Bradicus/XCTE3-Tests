/* 
* Copyright XCTE Contributors
* This file is released under the zlib/libpng license, see license.txt in the
* root directory
*/

/**
* @class TableCfg
* 
*/
export class TableCfg {
    itemClass: ClassSpec | null = null;
    containerVarName: string = "";
    containerType: string = "";
    iteratorVarName: string = "";
    isObservable: boolean = false;
    isEmbedded: boolean = false;
    
    constructor(
            itemClass: ClassSpec,
            containerVarName: string,
            containerType: string,
            iteratorVarName: string,
            isObservable: boolean,
            isEmbedded: boolean) {
        this.itemClass = itemClass;
        this.containerVarName = containerVarName;
        this.containerType = containerType;
        this.iteratorVarName = iteratorVarName;
        this.isObservable = isObservable;
        this.isEmbedded = isEmbedded;
    }
}

