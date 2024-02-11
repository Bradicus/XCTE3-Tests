/* 
* Copyright XCTE Contributors
* This file is released under the zlib/libpng license, see license.txt in the
* root directory
*/

/**
* @class CodeElemBuildVar
* 
*/
export class CodeElemBuildVar {
    name: string = "";
    value: string = "";
    
    constructor(name: string, value: string) {
        this.name = name;
        this.value = value;
    }
}

