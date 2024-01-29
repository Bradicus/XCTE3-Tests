import { Command } from 'commander';
import figlet from "figlet";
import { ProjectLoader } from "./data-loading/project-loader";

const command = new Command();

command
  .name('xcte4')
  .description('Generate code')
  .version('1.0')
  .parse(process.argv);

console.log(figlet.textSync("XCTE"));


    var project = ProjectLoader.load("xcte.project.xml");

