#!/usr/bin/env node
import program from 'commander';
import genDiff from '../index';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.');

program
  .option('-f, --format', 'output format')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => {
    const difference = genDiff(firstConfig, secondConfig);
    console.log(difference);
  });

program
  .parse(process.argv);
