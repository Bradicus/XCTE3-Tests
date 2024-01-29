/* 
Copyright XCTE Contributors
This file is released under the zlib/libpng license, see license.txt in the
root directory
*/

/**
* @class SourceRenderer
* 
*/
export class SourceRenderer {
    indentLevel: number = 0;
    indentChars: string = "";
    lines: string[] = [];
    blockDelimOpen: string = "{";
    blockDelimClose: string = "}";
    hangingFunctionStart: boolean = false;
    hangingBlockStart: boolean = true;
    lineEnding: string = "\n";
}

