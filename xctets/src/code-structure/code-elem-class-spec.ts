/* 
* Copyright XCTE Contributors
* This file is released under the zlib/libpng license, see license.txt in the
* root directory
*/

import { CodeElemClassRef } from './code-elem-class-ref';
import { CodeElemFunction } from './code-elem-function';
import { CodeElemInclude } from './code-elem-include';
import { CodeElemNamespace } from './code-elem-namespace';
import { CodeElemType } from './code-elem-type';
import { CodeElemUse } from './code-elem-use';
import { CodeElemVariable } from './code-elem-variable';
import { ProjectElem } from './project-elem';

/**
* @class CodeElemClassSpec
* 
*/
export class CodeElemClassSpec {
    element_id: CodeElemType = CodeElemType.ELEM_CLASS_GEN;
    model: string = "model";
    path: string = "";
    namespace: CodeElemNamespace = new CodeElemNamespace();
    language: string = "";
    includes: CodeElemInclude[] = [];
    uses: CodeElemUse[] = [];
    genCfg: ProjectElem | null = new ProjectElem();
    functions: CodeElemFunction[] = [];
    base_classes: CodeElemClassSpec[] = [];
    interfaces: CodeElemClassSpec[] = [];
    injections: CodeElemVariable[] = [];
    interface_namespace: CodeElemNamespace = new CodeElemNamespace();
    test_namespace: CodeElemNamespace = new CodeElemNamespace();
    templateParams: CodeElemClassSpec[] = [];
    var_prefix: string | null = null;
    preDefs: string[] = [];
    filePath: string | null = null;
    standardClass: string | null = null;
    standardClassType: string | null = null;
    customCode: string | null = null;
    dataClass: string | null = null;
    classGroupRef: CodeElemClassRef | null = new CodeElemClassRef();
    classGroupName: string | null = null;
    variant: string | null = null;
    feature_group: string | null = null;
}

