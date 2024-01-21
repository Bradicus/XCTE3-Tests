import { Attribute } from './attribute';
/**
* @class DataNode
* 
*/

export class DataNode {
    name: string = "";
    parent: DataNode | null = new DataNode();
    attributes: Attribute[] = [];
    children: DataNode[] = [];
    content: string = "";
}

