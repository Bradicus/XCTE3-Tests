/* 
Copyright XCTE Contributors
This file is released under the zlib/libpng license, see license.txt in the
root directory
*/

import { CodeElemClassSpec } from '../code-structure/code-elem-class-spec';
import { SourceRenderer } from '../plugin-base/source-renderer';

/**
* @class UtilsEachVarParams
* 
*/
export class UtilsEachVarParams {
    cls: CodeElemClassSpec | null = null;
    bld: SourceRenderer | null = null;
    separateGroups: boolean = false;
    varFun: Function | null = null;
    beforeFun: Function | null = null;
    afterFun: Function | null = null;
}

