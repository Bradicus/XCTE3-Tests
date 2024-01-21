import * as program from "commander";
const command = new program.Command();

command
  .name('xcte4')
  .description('Generate code')
  .version('1.0');

command.command('f')
  .description('Run a single file')
  .argument('<string>', 'File name')
  .option('-cfg', 'Use non-default config file')
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));

    
  });

program.program.parse();