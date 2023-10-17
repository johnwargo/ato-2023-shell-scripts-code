import {$} from 'execa';

const msg=['Hello', 'John', '&', 'ATO.'];

const {stdout} = await $`echo ${msg}`;
console.log(stdout);
