/* 
* Copyright XCTE Contributors
* This file is released under the zlib/libpng license, see license.txt in the
* root directory
*/

import { CodeElem } from './code-elem';

/**
* @class CodeElemLibraryDependency
* 
*/
export class CodeElemLibraryDependency extends CodeElem {
    name: string | null = null;
    versionMin: string | null = null;
    versionMax: string | null = null;
}

