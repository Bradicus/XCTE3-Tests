/* 
* Copyright XCTE Contributors
* This file is released under the zlib/libpng license, see license.txt in the
* root directory
*/

import { CodeElem } from './code-elem';
import { CodeElemNamespace } from './code-elem-namespace';

/**
* @class CodeElemUse
* 
*/
export class CodeElemUse extends CodeElem {
    namespace: CodeElemNamespace = new CodeElemNamespace();
}

