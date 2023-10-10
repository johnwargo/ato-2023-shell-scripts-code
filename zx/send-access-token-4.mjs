#!/usr/bin/env zx

console.log(chalk.green('Launching ADB'));
const params = [
  'shell',
  'input',
  'text',
  "YOUR_ACCESS_TOKEN"
];

try {
  await $`adb ${params}`
  console.log('Task completed');
} catch (p) {
  console.log(`\nExit code: ${p.exitCode}`);
  console.log(chalk.red(p.stderr));
  process.exit(1);
}
