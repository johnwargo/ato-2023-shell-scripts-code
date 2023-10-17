import {$} from 'execa';

const $$ = $({stdout: 'inherit'});

const accessToken = 'token439';

await $$`adb shell input text ${accessToken}`
