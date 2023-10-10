import {$} from 'execa';
import chalk from 'chalk';
import parseArgs from 'minimist';

const $$ = $({stdio: 'inherit'});
var argv = parseArgs(process.argv.slice(2));

const accessToken = 'YOUR_ACCESS_TOKEN';
const deviceID = 'YOUR_DEVICE_ID';

// zx includes minimist, so we can use argv
// https://www.npmjs.com/package/minimist
if (!argv.a && !argv.d) {
  // zx includes chalk too
  console.log(chalk.red('\nInvalid command line: requires an "-a" (API Key) or a "-d" (Device ID) argument.'));
  process.exit(1);
}

var theCode = argv.a ? accessToken : deviceID;
try {
  await $$`adb shell input text ${theCode}`
} catch (error) {
  console.error(error);  
  process.exit(1);
}
console.log('Task completed');
