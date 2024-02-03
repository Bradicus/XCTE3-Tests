/* 
* Copyright XCTE Contributors
* This file is released under the zlib/libpng license, see license.txt in the
* root directory
*/

import { CodeElem } from './code-elem';
import { CodeElemNamespace } from './code-elem-namespace';
import { CodeElemType } from './code-elem-type';

/**
* @class CodeElemTemplatePath
* 
*/
export class CodeElemTemplatePath extends CodeElem {
    element_id: CodeElemType = CodeElemType.ELEM_TEMPLATE_DIRECTORY;
    path: string = "";
    dest: string = "";
    languages: string[] = [];
    isStatic: boolean = true;
    namespace: CodeElemNamespace = new CodeElemNamespace();
    
    constructor(name: string, path: string, dest: string, namespace: CodeElemNamespace) {
        super();
        this.name = name;
        this.path = path;
        this.dest = dest;
        this.namespace = namespace;
    }
}

