import { CodeElem } from './code-elem';
import { CodeElemBuildVar } from './code-elem-build-var';
import { CodeElemNamespace } from './code-elem-namespace';
import { ProjectElemExternalDependency } from './project-elem-external-dependency';
/**
* @class ProjectElemGenerator
* 
*/

export class ProjectElemGenerator extends CodeElem {
    language: string = "";
    templateFolder: string = "";
    ouputFolder: string = "";
    fileNote: string = "";
    ignoreNamespace: boolean = false;
    buildVars: CodeElemBuildVar[] = [];
    baseNamespace: CodeElemNamespace = new CodeElemNamespace();
    externalDependencies: ProjectElemExternalDependency[] = [];
    logger: string = "null";
    includeFolders: string[] = [];
    libraryFolders: string[] = [];
}

