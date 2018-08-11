#!/usr/bin/env node
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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


var _blocktron = __webpack_require__(2);

var _blocktron2 = _interopRequireDefault(_blocktron);

var _repoUrls = __webpack_require__(3);

var _repoUrls2 = _interopRequireDefault(_repoUrls);

var _async = __webpack_require__(4);

var _async2 = _interopRequireDefault(_async);

var _figlet = __webpack_require__(5);

var _figlet2 = _interopRequireDefault(_figlet);

var _figlet3 = __webpack_require__(6);

var _figlet4 = _interopRequireDefault(_figlet3);

var _chalk = __webpack_require__(7);

var _chalk2 = _interopRequireDefault(_chalk);

var _replaceInFile = __webpack_require__(8);

var _replaceInFile2 = _interopRequireDefault(_replaceInFile);

var _child_process = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A helper function to augment console.log with chalk
 * @name log
 * @param {String} message - The message string
 * @param {String} level - The type of message
 */


/**
 * Replace-in-file - replace strings in files
 */


/**
 * Figlet configuration
 */


/**
 * async - utilities library for async operations
 */
var log = function log() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  switch (level) {
    case 'default':
      console.log(_chalk2.default.white(message));
      break;
    case 'info':
      console.log(_chalk2.default.blue(message));
      break;
    case 'success':
      console.log(_chalk2.default.green(message));
      break;
    case 'warn':
      console.log(_chalk2.default.yellow.bold(message));
      break;
    case 'error':
      console.log(_chalk2.default.red.bold(message));
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


/**
 * Exec command from child_process
 * Function to Spawns a shell then executes the command within that shell, buffering any generated output. 
 * The command string passed to the exec function is processed directly by the shell and special 
 * characters (vary based on shell) need to be dealt with accordingly.
 * Note: Never pass unsanitized user input to this function. 
 * Any input containing shell metacharacters may be used to trigger arbitrary command execution.
 */


/**
 * Chalk - colorful terminal logs
 */


/**
 * Figlet - render ASCII graphics in terminal
 */
var isWindows = function isWindows() {
  if (/^win/i.test(process.platform)) {
    return true;
  } else {
    return false;
  }
};

/**
 * @name run
 * A Promise factory to execute an arbitrary shell command.
 * @param {String} script - The arbitrary shell command to execute.
 * @returns {<Promise>} - The promise object containing the stdout/stderr. 
 */
var run = function run(script) {
  return new Promise(function (resolve, reject) {
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
    (0, _child_process.exec)(script, function (error, stdout, stderr) {
      if (stderr) {
        //reject promise with error
        reject(stderr);
      } else {
        //resolve promise with success
        resolve(stdout);
      }
    });
  });
};

if (process.argv[2] && process.argv[2].length !== 0) {
  var option = process.argv[2];
  if (option === 'help') {

    log('Help', 'info');
  } else if (option === 'version') {

    log('v' + _blocktron2.default.version, 'info');
  } else if (option.length < 3 || !option.match(/^(\w+\.?)*\w+$/g)) {

    log('Error: Please provide a valid name with minimum 3 char length', 'error');
  } else {

    var projectName = option;
    log('Building project............... ' + projectName, 'info');

    /**
     * Check whether git is installed or not and continue.
     */
    var checkGit = 'git';
    (0, _child_process.exec)(checkGit, function (data) {
      if (!data) {
        log(_chalk2.default.red.bold('\nError: Git is not installed'));
        process.exit();
      }

      /**
       * Clone repo
       */
      var gitCommand = 'git clone ' + _repoUrls2.default.blocktronNode + ' ' + projectName;

      var clone = (0, _child_process.exec)(gitCommand, function (err) {
        if (err) {
          log(_chalk2.default.red.bold(err));
          process.exit();
        } else {
          log('Cloning repo...................', 'info');
        }
      });

      clone.on('close', function () {

        log(_chalk2.default.green('\nProject files downloaded successfully.'));
        if (isWindows) {

          /**
           * Cleanup project folder in WINDOWS.
           */
          //remove .git directory
          var removeGitFolder = 'rmdir ' + projectName + '\\.git /s /q';
          //remove .github folder
          var removeGithubFolder = 'rmdir ' + projectName + '\\.github /s /q';
          //remove CODE_OF_CONDUCT.md
          var removeCoC = 'del ' + projectName + '\\CODE_OF_CONDUCT.md /s /q';
          //remove PULL_REQUEST_TEMPLATE.md
          var removePullReqTemp = 'del ' + projectName + '\\PULL_REQUEST_TEMPLATE.md /s /q';
          //remove CONTRIBUTING.md
          var removeContrib = 'del ' + projectName + '\\CONTRIBUTING.md /s /q';
          //remove LICENSE
          var removeLicense = 'del ' + projectName + '\\LICENSE /s /q';

          /**
           * Promisify and execute remove commands.
           */
          run(removeGitFolder).then(function (command1) {
            return run(removeGithubFolder);
          }).then(function (command2) {
            return run(removeCoC);
          }).then(function (command3) {
            return run(removePullReqTemp);
          }).then(function (command4) {
            return run(removeContrib);
          }).then(function (command5) {
            return run(removeLicense);
          }).catch(function (error) {
            log(_chalk2.default.red.bold('\nError cleaning up the project: , ' + error));
          });
        }
      });
    });
  }
} else {

  /**
   * Bootstrap the cli after rendering the logo
   */
  (0, _figlet2.default)(_blocktron2.default.name, _figlet4.default, function (err, data) {
    if (err) {
      log('logo rendering failed!: ' + err, 'error');
    }

    /**
     * render the logo in bold yellow and version in blue
     */
    log(data, 'warn');
    log('v' + _blocktron2.default.version, 'info');
    log('\nUsage:', 'info');
    log('blocktron [commands]', 'info');
    log('\nAvailable Commands:', 'info');
    log('     help                 show cli help', 'info');
    log('     version              get cli version', 'info');
    log('     .                    generate a new blocktron-node instance in the current directory', 'info');
    log('     <project-name>       generate a new blocktron-node instance in the <project-name> directory', 'info');
  });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Application configuration object
 */
var _BtConfig = {
  name: 'Blocktron  cli',
  version: '1.0.0'
};

exports.default = _BtConfig;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var URL_SCHEMA = {
    blocktronNode: 'https://github.com/Blocktron-Project/blocktron-explorer.git',
    blocktronExplorer: 'https://github.com/Blocktron-Project/blocktron-node.git'
};

exports.default = URL_SCHEMA;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("async");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("figlet");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Figlet configuration object
 * @see {@link https://www.npmjs.com/package/figlet#font-options | Figlet-NPM}
 */
var figletConfig = {
  font: 'Big',
  horizontalLayout: 'fitted',
  verticalLayout: 'default'
};

exports.default = figletConfig;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("replace-in-file");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map