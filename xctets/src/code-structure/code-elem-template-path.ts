/* 
* Copyright XCTE Contributors
* This file is released under the zlib/libpng license, see license.txt in the
* root directory
*/

import { CodeElemNamespace } from './code-elem-namespace';

/**
* @class CodeElemTemplatePath
* 
*/
export class CodeElemTemplatePath {
    name: string = "";
    path: string = "";
    dest: string = "";
    languages: string[] = [];
    isStatic: boolean = true;
    namespace: CodeElemNamespace = new CodeElemNamespace();
    
    constructor(name: string, path: string, dest: string, namespace: CodeElemNamespace) {
        this.name = name;
        this.path = path;
        this.dest = dest;
        this.namespace = namespace;
    }
}

