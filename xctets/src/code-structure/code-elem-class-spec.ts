/* 
* Copyright XCTE Contributors
* This file is released under the zlib/libpng license, see license.txt in the
* root directory
*/

import { CodeElem } from './code-elem';
import { CodeElemClassRef } from './code-elem-class-ref';
import { CodeElemDataSpec } from './code-elem-data-spec';
import { CodeElemFunction } from './code-elem-function';
import { CodeElemInclude } from './code-elem-include';
import { CodeElemNamespace } from './code-elem-namespace';
import { CodeElemVariable } from './code-elem-variable';
import { ProjectElem } from './project-elem';

/**
* @class CodeElemClassSpec
* 
*/
export class CodeElemClassSpec extends CodeElem {
    model: CodeElemDataSpec | null = null;
    path: string = "";
    plugName: string = "";
    namespace: CodeElemNamespace = new CodeElemNamespace();
    language: string = "";
    includes: CodeElemInclude[] = [];
    uses: CodeElemNamespace[] = [];
    genCfg: ProjectElem | null = new ProjectElem();
    functions: CodeElemFunction[] = [];
    baseClasses: CodeElemClassSpec[] = [];
    interfaces: CodeElemClassSpec[] = [];
    injections: CodeElemVariable[] = [];
    interfaceNamespace: CodeElemNamespace = new CodeElemNamespace();
    interfacePath: string = "";
    testNamespace: CodeElemNamespace = new CodeElemNamespace();
    testPath: string = "";
    templateParams: CodeElemClassSpec[] = [];
    varPrefix: string | null = null;
    preDefs: string[] = [];
    filePath: string | null = null;
    standardClass: string | null = null;
    standardClassType: string | null = null;
    customCode: string | null = null;
    dataClass: string | null = null;
    classGroupRef: CodeElemClassRef | null = new CodeElemClassRef();
    classGroupName: string | null = null;
    variant: string | null = null;
    featureGroup: string | null = null;
    
    constructor(parentElem: CodeElem, model: CodeElemDataSpec) {
        super();
        this.parentElem = parentElem;
        this.model = model;
    }
}

