import { CodeElem } from './code-elem';
import { CodeElemNamespace } from './code-elem-namespace';
/**
* @class CodeElemTemplatePath
* 
*/

export class CodeElemTemplatePath extends CodeElem {
    elementId: string = "CodeElem::ELEM_TEMPLATE_DIRECTORY";
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

