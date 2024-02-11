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
    buildType: string | null = null;
    templateFolders: string | null = null;
    langProfilePaths: string[] = [];
    includeFolders: string[] = [];
    libraryFolders: string[] = [];
    singleFile: string | null = null;
    dest: string | null = null;
    generators: ProjectElemGenerator[] = [];
}

