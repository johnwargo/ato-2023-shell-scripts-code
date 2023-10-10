import {execa} from 'execa';

const msg='Hello world!';

const {stdout} = await execa(`echo ${msg}`);
console.log(stdout);
