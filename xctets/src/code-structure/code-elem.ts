import { DataNode } from '../data-loading/data-node';
/**
* @class CodeElem
* 
*/

export class CodeElem {
    elementId: string = "";
    name: string = "";
    displayName: string = "";
    description: string = "";
    visibility: string = "";
    parentElem: CodeElem = new CodeElem();
    dataNode: DataNode | null = null;
    osInclude: string[] = [];	/** What os's this node is limited to */
}

