/**
 * Blocktron CLI
 * A CLI tool to generate a blocktron instance.
 * Written by: Sandeep Vattapparambil
 * Email: sandeepv68@gmail.com
 * Website: www.sandeepv.in
 */

/**
 * Use strict mode
 */
'use strict';

import _BtConfig from '../config/blocktron';
import URL_SCHEMA from '../config/repoUrls';

/**
 * async - utilities library for async operations
 */
import async from 'async';

/**
 * Figlet - render ASCII graphics in terminal
 */
import figlet from 'figlet';

/**
 * Figlet configuration
 */
import figletConfig from '../config/figlet';

/**
 * Chalk - colorful terminal logs
 */
import chalk from 'chalk';

/**
 * Replace-in-file - replace strings in files
 */
import replace from 'replace-in-file';

/**
 * Exec command from child_process
 * Function to Spawns a shell then executes the command within that shell, buffering any generated output. 
 * The command string passed to the exec function is processed directly by the shell and special 
 * characters (vary based on shell) need to be dealt with accordingly.
 * Note: Never pass unsanitized user input to this function. 
 * Any input containing shell metacharacters may be used to trigger arbitrary command execution.
 */
import {
  exec
} from 'child_process';

/**
 * A helper function to augment console.log with chalk
 * @name log
 * @param {String} message - The message string
 * @param {String} level - The type of message
 */
const log = (message = '', level = '') => {
  switch (level) {
    case 'default':
      console.log(chalk.white(message));
      break;
    case 'info':
      console.log(chalk.blue(message));
      break;
    case 'success':
      console.log(chalk.green(message));
      break;
    case 'warn':
      console.log(chalk.yellow.bold(message));
      break;
    case 'error':
      console.log(chalk.red.bold(message));
      break;
    default:
      console.log(message);
  }
  return;
};

/**
 * @name isWindows
 * Helper function to check the current platform for Windows/Unix-ish.
 * @returns {Boolean} - Returns true if Windows, else false.
 */
const isWindows = () => {
  if (/^win/i.test(process.platform)) {
    return true;
  } else {
    return false;
  }
}

/**
 * @name run
 * A Promise factory to execute an arbitrary shell command.
 * @param {String} script - The arbitrary shell command to execute.
 * @returns {<Promise>} - The promise object containing the stdout/stderr. 
 */
const run = (script) => {
  return new Promise((resolve, reject) => {
    /**
     * If a callback function is provided, it is called with the arguments (error, stdout, stderr). 
     * On success, error will be null. On error, error will be an instance of Error. 
     * The error.code property will be the exit code of the child process while error.signal 
     * will be set to the signal that terminated the process. 
     * Any exit code other than 0 is considered to be an error.
     * The stdout and stderr arguments passed to the callback will contain the stdout and stderr 
     * output of the child process. By default, Node.js will decode the output as UTF-8 and pass 
     * strings to the callback. The encoding option can be used to specify the character encoding 
     * used to decode the stdout and stderr output. If encoding is 'buffer', or an unrecognized 
     * character encoding, Buffer objects will be passed to the callback instead.
     */
    exec(script, (error, stdout, stderr) => {
      if (stderr) {
        //reject promise with error
        reject(stderr);
      } else {
        //resolve promise with success
        resolve(stdout);
      }
    });
  });
}

if (process.argv[2] && process.argv[2].length !== 0) {
  let option = process.argv[2];
  if (option === 'help') {

    log('Help', 'info');
  } else if (option === 'version') {

    log(`v${_BtConfig.version}`, 'info');
  } else if (option.length < 3 || !option.match(/^(\w+\.?)*\w+$/g)) {

    log(`Error: Please provide a valid name with minimum 3 char length`, 'error');
  } else {

    let projectName = option;
    log(`Building project -> ${projectName}..................[START]`, 'info');

    /**
     * Check whether git is installed or not and continue.
     */
    let checkGit = `git`;
    exec(checkGit, (data) => {
      if (!data) {
        log(chalk.red.bold(`\nError: Git is not installed`));
        process.exit();
      }

      /**
       * Clone repo
       */
      const gitCommand = `git clone ${URL_SCHEMA.blocktronNode} ${projectName}`;

      log('Cloning repo...............................[START]', 'info');
      let clone = exec(gitCommand, (err) => {

        if (err) {
          log(chalk.red.bold(err));
          process.exit();
        }
      });

      clone.on('close', () => {

        log('Cloning repo...............................[DONE]', 'info');
        if (isWindows) {

          /**
           * Cleanup project folder in WINDOWS.
           */
          //remove circle ci folder
          let removeCircleCI = `rmdir ${projectName}\\.circleci /s /q`;
          //remove .github folder
          let removeGithubFolder = `rmdir ${projectName}\\.github /s /q`;
          //remove CODE_OF_CONDUCT.md
          let removeCoC = `del ${projectName}\\CODE_OF_CONDUCT.md /s /q`;
          //remove PULL_REQUEST_TEMPLATE.md
          let removePullReqTemp = `del ${projectName}\\PULL_REQUEST_TEMPLATE.md /s /q`;
          //remove CONTRIBUTING.md
          let removeContrib = `del ${projectName}\\CONTRIBUTING.md /s /q`;
          //remove LICENSE
          let removeLicense = `del ${projectName}\\LICENSE /s /q`;
          //remove travis
          let removeTravis = `del ${projectName}\\.travis /s /q`;

          /**
           * Promisify and execute remove commands.
           */
          run(removeCircleCI).then((command1) => {
              return run(removeGithubFolder);
            }).then((command2) => {
              return run(removeCoC);
            }).then((command3) => {
              return run(removePullReqTemp);
            }).then((command4) => {
              return run(removeContrib);
            }).then((command5) => {
              return run(removeLicense);
            })
            .then((command6) => {
              return run(removeTravis);
            }).catch((error) => {
              log(chalk.red.bold(`\nError cleaning up the project: , ${error}`));
            });
        }
      });
    });
  }
} else {

  /**
   * Bootstrap the cli after rendering the logo
   */
  figlet(_BtConfig.name, figletConfig, (err, data) => {
    if (err) {
      log('logo rendering failed!: ' + err, 'error');
    }

    /**
     * render the logo in bold yellow and version in blue
     */
    log(data, 'warn');
    log(`v${_BtConfig.version}`, 'info');
    log('\nUsage:', 'info');
    log('blocktron [commands]', 'info');
    log('\nAvailable Commands:', 'info');
    log('     help                 show cli help', 'info');
    log('     version              get cli version', 'info');
    log('     .                    generate a new blocktron-node instance in the current directory', 'info');
    log('     <project-name>       generate a new blocktron-node instance in the <project-name> directory', 'info');
  });
}