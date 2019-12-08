#!/usr/bin/env node
import program from 'commander';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.');

program
  .option('-f, --format', 'output format')
  .arguments('<firstConfig> <secondConfig>')
  .action(() => {
    console.log('Something');
  });

program
  .parse(process.argv);
