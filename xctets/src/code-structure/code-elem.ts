/* 
* Copyright XCTE Contributors
* This file is released under the zlib/libpng license, see license.txt in the
* root directory
*/

import { DataNode } from '../data-loading/data-node';

/**
* @class CodeElem
* 
*/
export class CodeElem {
    name: string | null = null;
    comment: string = "";
    visibility: string | null = null;
    parentElem: CodeElem | null = null;
    dataNode: DataNode | null = null;
    langOnly: string[] = [];	/** What languages this node is limited to */
    osOnly: string[] = [];	/** What os's this node is limited to */
    
    constructor(parentElem: CodeElem | null) {
        this.parentElem = parentElem;
    }
}

