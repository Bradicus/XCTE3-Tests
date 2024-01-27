import { CodeElem } from './code-elem';
/**
* @class CodeElemTemplate
* 
*/

export class CodeElemTemplate extends CodeElem {
    name: string = "";
    isPointerTpl: boolean = false;
    isCollection: boolean = false;
    
    constructor(tplString: string) {
        super();
    }
}

