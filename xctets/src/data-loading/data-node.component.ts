/* 
Copyright XCTE Contributors
This file is released under the zlib/libpng license, see license.txt in the
root directory
*/

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

