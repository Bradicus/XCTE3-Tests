import { CodeElem } from './code-elem';
import { ProjectElemGenerator } from './project-elem-generator';
/**
* @class ProjectElem
* 
*/

export class ProjectElem extends CodeElem {
    elementId: string = "CodeElem::ELEM_PROJECT";
    buildType: string = "null";
    templateFolders: string[] = [];
    langProfilePaths: string[] = [];
    includeFolders: string[] = [];
    libraryFolders: string[] = [];
    singleFile: string = "null";
    generators: ProjectElemGenerator[] = [];
}

