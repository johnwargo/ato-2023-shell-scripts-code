import {execa} from 'execa';

const {stdout} = await execa('echo', ['Hello world!']);
console.log(stdout);
