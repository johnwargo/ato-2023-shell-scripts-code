#!/usr/bin/env zx

const accessToken = 'YOUR_ACCESS_TOKEN';

await $`adb shell input text ${accessToken}`
