import { CodeElem } from './code-elem';
import { CodeElemNamespace } from './code-elem-namespace';
/**
* @class CodeElemUse
* 
*/

export class CodeElemUse extends CodeElem {
    namespace: CodeElemNamespace = new CodeElemNamespace();
}

