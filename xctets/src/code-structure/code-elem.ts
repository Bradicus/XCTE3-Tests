/* 
* Copyright XCTE Contributors
* This file is released under the zlib/libpng license, see license.txt in the
* root directory
*/

import { CodeElemType } from './code-elem-type';
import { DataNode } from '../data-loading/data-node';

/**
* @class CodeElem
* 
*/
export class CodeElem {
    element_id: CodeElemType | null = null;
    name: string | null = null;
    display_name: string = "";
    description: string = "";
    visibility: string = "";
    parentElem: CodeElem | null = null;
    dataNode: DataNode | null = null;
    osInclude: string[] = [];	/** What os's this node is limited to */
}

