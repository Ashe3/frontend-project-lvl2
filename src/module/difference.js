import fs from 'fs';
import { has, flattenDeep, uniq } from 'lodash';

const parse = (filepath) => {
  const data = fs.readFileSync(filepath, 'utf-8');
  return JSON.parse(data);
};

const compareValues = (obj1, obj2, key) => {
  if (obj1[key] === obj2[key]) {
    return [`  ${key}: ${obj1[key]}`];
  }
  return [`+ ${key}:${obj2[key]}`, `- ${key}:${obj1[key]}`];
};

const formatOutput = (data) => `{\n${flattenDeep(data).join('\n')}\n}`;

const compareFilesData = (fileData1, fileData2) => {
  const keys = uniq([...Object.keys(fileData1), ...Object.keys(fileData2)]);
  const result = keys.reduce((acc, key) => {
    if (has(fileData1, key) && has(fileData2, key)) {
      return [...acc, compareValues(fileData1, fileData2, key)];
    }
    if (!has(fileData1, key) && has(fileData2, key)) {
      return [...acc, `+ ${key}: ${fileData2[key]}`];
    }
    if (has(fileData1, key) && !has(fileData2, key)) {
      return [...acc, `- ${key}: ${fileData1[key]}`];
    }
    return acc;
  }, []);
  return result;
};

export default (filepath1, filepath2) => {
  const fileData1 = parse(filepath1);
  const fileData2 = parse(filepath2);
  return formatOutput(compareFilesData(fileData1, fileData2));
};
