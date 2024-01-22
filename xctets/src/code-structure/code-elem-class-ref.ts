import { CodeElem } from './code-elem';
import { CodeElemNamespace } from './code-elem-namespace';
/**
* @class CodeElemClassRef
* 
*/

export class CodeElemClassRef extends CodeElem {
    namespaces: CodeElemNamespace[] = [];
    plugName: string = "null";
    pluginName: string = "null";
}

