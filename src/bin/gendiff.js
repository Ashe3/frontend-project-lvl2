#!/usr/bin/env node
import program from 'commander';
import diff from '../index';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.');

program
  .option('-f, --format', 'output format')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => {
    diff(firstConfig, secondConfig);
  });

program
  .parse(process.argv);
