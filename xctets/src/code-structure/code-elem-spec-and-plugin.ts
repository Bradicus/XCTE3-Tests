/* 
* Copyright XCTE Contributors
* This file is released under the zlib/libpng license, see license.txt in the
* root directory
*/

import { CodeElemClassSpec } from './code-elem-class-spec';

/**
* @class CodeElemSpecAndPlugin
* 
*/
export class CodeElemSpecAndPlugin {
    spec: CodeElemClassSpec | null = new CodeElemClassSpec();
    plugin: XCTEPlugin | null = new XCTEPlugin();
}

