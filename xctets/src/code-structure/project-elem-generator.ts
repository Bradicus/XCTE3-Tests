import { CodeElem } from './code-elem';
import { CodeElemBuildVar } from './code-elem-build-var';
import { CodeElemNamespace } from './code-elem-namespace';
import { ProjectElemExternalDependency } from './project-elem-external-dependency';
/**
* @class ProjectElemGenerator
* 
*/

export class ProjectElemGenerator extends CodeElem {
    language: string | null = null;
    templateFolders: string[] = [];
    ouputFolder: string | null = null;
    fileNote: string | null = null;
    ignoreNamespace: boolean = false;
    buildVars: CodeElemBuildVar[] = [];
    baseNamespace: CodeElemNamespace = new CodeElemNamespace();
    externalDependencies: ProjectElemExternalDependency[] = [];
    logger: string | null = null;
    includeFolders: string[] = [];
    libraryFolders: string[] = [];
}

