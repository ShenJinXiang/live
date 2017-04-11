#!/usr/bin/env node
var program = require('commander');
 
program
  .version('0.0.1')
  .option('-g, --generate', 'generate1')
  .option('-s, --server', 'server1')
  .option('-c, --clean', 'clean1')
  .parse(process.argv);
 
if (program.generate) console.log('  - generate');
if (program.server) console.log('  - server');
if (program.clean) console.log('  - clean');
