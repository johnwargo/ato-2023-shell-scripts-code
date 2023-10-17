import {$} from 'execa';
import chalk from 'chalk';

const $$ = $({stdout: 'inherit'});

console.log(chalk.green('Launching ADB'));
try {
  await $$`adb shell input text token23`
  console.log('Task completed');
} catch (p) {
  console.log(`\nExit code: ${p.exitCode}`);
  console.log(chalk.red(p.stderr));
  process.exit(1);
}
