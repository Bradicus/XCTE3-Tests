/* 
* Copyright XCTE Contributors
* This file is released under the zlib/libpng license, see license.txt in the
* root directory
*/

import { CodeElem } from './code-elem';
import { CodeElemNamespace } from './code-elem-namespace';

/**
* @class CodeElemClassRef
* 
*/
export class CodeElemClassRef extends CodeElem {
    namespaces: CodeElemNamespace[] = [];
    plug_name: string | null = null;
    pluginName: string | null = null;
}

