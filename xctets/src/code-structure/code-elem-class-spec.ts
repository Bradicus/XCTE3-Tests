import { CodeElemNamespace } from './code-elem-namespace';
import { CodeElemUse } from './code-elem-use';
import { CodeElemVariable } from './code-elem-variable';
/**
* @class CodeElemClassSpec
* 
*/

export class CodeElemClassSpec {
    elementId: string = "CodeElem::ELEM_CLASS_GEN";
    model: string = "model";
    path: string = "";
    namespace: CodeElemNamespace = new CodeElemNamespace();
    language: string = "nil";
    includes: CodeElemInclude[] = [];
    uses: CodeElemUse[] = [];
    genCfg: ProjectComponent = pComp;
    functions: CodeElemFunction[] = [];
    baseClasses: CodeElemClassSpec[] = [];
    interfaces: CodeElemInterface[] = [];
    injections: CodeElemVariable[] = [];
    interfaceNamespace: CodeElemNamespace = new CodeElemNamespace();
    testNamespace: CodeElemNamespace = new CodeElemNamespace();
    templateParams: CodeElemClassGen[] = [];
    varPrefix: string = "";
    preDefs: string[] = [];
    filePath: string = "";
    standardClass: string = "";
    standardClassType: string = "";
    customCode: string = "";
    dataClass: string = "";
    classGroupRef: string | null = "null";
    classGroupName: string | null = "null";
    variant: string | null = "null";
    featureGroup: string | null = "null";
}

