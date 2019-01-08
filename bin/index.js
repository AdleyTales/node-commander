#!/usr/local/bin/node

var program = require('commander');
var exec = require('child_process').exec;
const chalk = require('chalk');

var config = {
  url: `https://github.com/AdleyTales/gulp-tool-front.git`
}

program
  .version('0.0.1', '-V, --version')

program
  .command('init <templateName> <projectName>')
  .description("初始化项目")
  .action(function(a, b) {
    console.log(a, b);
  })

program
  .command('clone')
  .description("初始化项目")
  .action(() => {
    let cmdStr = `git clone ${config.url}`;

    exec(cmdStr, (error, stdout, stderr) => {
      if (error) {
        console.log(error)
        process.exit()
      }
      console.log(chalk.green('\n √ Generation completed!'))
      console.log(`\n cd node-commander-test && npm install \n`)
      process.exit()
    })

  })

program.parse(process.argv)
