/* 
* Copyright XCTE Contributors
* This file is released under the zlib/libpng license, see license.txt in the
* root directory
*/

import { CodeElem } from './code-elem';

/**
* @class CodeElemInclude
* 
*/
export class CodeElemInclude extends CodeElem {
    name: string | null = null;
    path: string | null = null;
    type: string | null = null;
}

