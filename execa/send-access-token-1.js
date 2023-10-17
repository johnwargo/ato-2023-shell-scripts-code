import {$} from 'execa';

const $$ = $({stdio: 'inherit'});

await $$`adb shell input text token123`

