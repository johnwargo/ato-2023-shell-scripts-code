#!/usr/bin/env zx

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
  await $`adb shell input text ${theCode}`
} catch (p) {
  console.log(`\nExit code: ${p.exitCode}\n`);
  console.log(chalk.red(p.stderr));
  process.exit(1);
}
console.log('Task completed');
