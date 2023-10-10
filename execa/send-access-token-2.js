import {$} from 'execa';

const $$ = $({stdout: 'inherit'});

const accessToken = 'YOUR_ACCESS_TOKEN';

await $$`adb shell input text ${accessToken}`
