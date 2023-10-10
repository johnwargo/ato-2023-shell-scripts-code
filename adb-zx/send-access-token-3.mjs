#!/usr/bin/env zx

console.log(chalk.green('Launching ADB'));
try {
  await $`adb shell input text YOUR_ACCESS_TOKEN`
  console.log('Task completed');
} catch (p) {
  console.log(`\nExit code: ${p.exitCode}`);
  console.log(chalk.red(p.stderr));
  process.exit(1);
}
