import {$} from 'execa';

const $$ = $({stdio: 'inherit'});

await $$`adb shell input text YOUR_ACCESS_TOKEN`

