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
 * Log - console.log instance augmented with chalk
 */
const log = (message = '', level = '') => {

  let levelClass = (level = 'default') => {

    let classNames = {
      'default': 'white',
      'info': 'blue',
      'success': 'green',
      'warn': 'yellow',
      'error': 'red'
    };
    return classNames[level] || classNames['default'];
  };

  let msg = `${levelClass(level)}`+(message);
  console.log(msg);
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

/**
 * Bootstrap the generator after rendering the logo
 */
figlet(_BtConfig.name, figletConfig, (err, data) => {
  if (err) {
    log(chalk.red('logo rendering failed!: ', err));
  }

  /**
   * render the logo in bold yellow and version in blue
   */
  // log(chalk.yellow.bold(data));
  // log(chalk.blue(`v${_BtConfig.version}`));
  log('hello', 'green');
});