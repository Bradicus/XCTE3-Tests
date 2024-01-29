/* 
* Copyright XCTE Contributors
* This file is released under the zlib/libpng license, see license.txt in the
* root directory
*/

import { CodeElem } from './code-elem';

/**
* @class CodeElemTemplate
* 
*/
export class CodeElemTemplate extends CodeElem {
    name: string = "";
    isPointerTpl: boolean = false;
    isCollection: boolean = false;
    
    constructor(tplString: string) {
        super();
    }
}

