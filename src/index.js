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

/**
 * Log - console.log instance
 */
const log = console.log;

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