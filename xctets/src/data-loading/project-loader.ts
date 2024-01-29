import { ProjectElem } from "../code-structure/project-elem";
import { ProjectElemGenerator } from "../code-structure/project-elem-generator";
import { AttributeLoader } from "./attribute-loader";

export class ProjectLoader {
  static load(fileName: string) {
    var project: ProjectElem = new ProjectElem();

    const fs = require('fs');
    const fileData = fs.readFileSync(fileName, "utf8");

    const jsdom = require("jsdom");
    const { JSDOM } = jsdom;

    const dom = new JSDOM(fileData);

    // There should only be one project element
    if (dom.window.document.getElementsByTagName("project").length != 1)
      console.error('There should be exactly project element');

    for (let p of dom.window.document.getElementsByTagName('project')) {
      project.name = p.getAttribute('name') ?? '';

      for (let gen of dom.window.document.getElementsByTagName('generator')) {
        ProjectLoader.loadGenerator(project, gen);
      }
    }

    return project;
  }

  static loadGenerator(project: ProjectElem, dataNode: Element) {
    var generator = new ProjectElemGenerator();

    generator.name = new AttributeLoader(dataNode).wName('name').wDefault('').get();
    generator.language = new AttributeLoader(dataNode).wName('language').wDefault('').get();
    generator.ouputFolder = new AttributeLoader(dataNode).wName('path').wDefault('').get();
    generator.templateFolders.push(dataNode.getAttribute('tpl_path') ?? 'templates');
    generator.ignoreNamespace = new AttributeLoader(dataNode).wName('ignore_namespace').wDefault('').get() == 'true'

    for (let desc of dataNode.getElementsByTagName('description')) {
      generator.description = desc.textContent ?? '';
    }

    project.generators.push(generator);
  }
}