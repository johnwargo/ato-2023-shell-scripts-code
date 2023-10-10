import {$} from 'execa';

const msg='Hello world!';

await $({stdout: 'inherit'})`echo ${msg}`;
