/* 
* Copyright XCTE Contributors
* This file is released under the zlib/libpng license, see license.txt in the
* root directory
*/

import { CodeElem } from './code-elem';
import { CodeElemClassSpec } from './code-elem-class-spec';
import { CodeElemVarGroup } from './code-elem-var-group';
import { DataFilter } from '../filters/data-filter';

/**
* @class CodeElemDataSpec
* 
*/
export class CodeElemDataSpec extends CodeElem {
    classes: CodeElemClassSpec[] = [];
    varGroup: CodeElemVarGroup = new CodeElemVarGroup();
    xmlFileName: string = "";
    modelSet: string = "";
    featureGroup: string | null = null;
    dataFilter: DataFilter = new DataFilter();
}

