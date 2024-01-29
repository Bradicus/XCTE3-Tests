/* 
* Copyright XCTE Contributors
* This file is released under the zlib/libpng license, see license.txt in the
* root directory
*/

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
    dest: string = "null";
    generators: ProjectElemGenerator[] = [];
}

