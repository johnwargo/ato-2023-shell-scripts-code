import {$} from 'execa';

const $$ = $({stdio: 'inherit'});

const accessToken = 'YOUR_ACCESS_TOKEN';

await $$`adb shell input text ${accessToken}`
