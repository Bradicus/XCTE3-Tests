import { ProjectElem } from "../code-structure/project-elem";

export class ProjectLoader {
    static load(fileName: string) {        
      var project: ProjectElem = new ProjectElem();

      const figlet = require("figlet");
      console.log(figlet.textSync("XCTE"));
      
      const fs = require('fs');
      const fileData = fs.readFileSync(fileName, "utf8");

      const { XMLParser, XMLBuilder, XMLValidator} = require("fast-xml-parser");
      const parser = new XMLParser();
      const doc = parser.parse(fileData);

      project.name = doc.name;

      return project;
      // doc.childNodes[0].
      // if (project.dest == null)
      //   project.dest = '.';
      
      // project.buildType = xmlDoc.root.attributes['build_type']

      // project.xmlElement = xmlDoc.root

      // xmlDoc.elements.each('project') do |prj|
      //   loadComponentGroup(project, project.componentGroup, prj)
      // end
    }
}