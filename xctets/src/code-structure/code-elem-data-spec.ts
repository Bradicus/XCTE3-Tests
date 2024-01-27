import { CodeElem } from './code-elem';
import { CodeElemClassSpec } from './code-elem-class-spec';
import { CodeElemVarGroup } from './code-elem-var-group';
import { DataFilter } from '../filters/data-filter';
/**
* @class CodeElemDataSpec
* 
*/

export class CodeElemDataSpec extends CodeElem {
    elementId: string = "CodeElem::ELEM_MODEL";
    classes: CodeElemClassSpec[] = [];
    varGroup: CodeElemVarGroup = new CodeElemVarGroup();
    xmlFileName: string = "";
    modelSet: string = "";
    featureGroup: string = "";
    dataFilter: DataFilter = new DataFilter();
}
