import { DataNode } from '../data-loading/data-node';
/**
* @class CodeElem
* 
*/

export class CodeElem {
    elementId: string = "";
    name: string | null = null;
    displayName: string = "";
    description: string = "";
    visibility: string = "";
    parentElem: CodeElem | null = null;
    dataNode: DataNode | null = null;
    osInclude: string[] = [];	/** What os's this node is limited to */
}

