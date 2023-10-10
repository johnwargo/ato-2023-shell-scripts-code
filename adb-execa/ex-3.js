import {$} from 'execa';

const msg='Hello world!';

await $({stdio: 'inherit'})`echo ${msg}`;
