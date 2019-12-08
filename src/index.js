import compare from './module/difference';

export default (path1, path2) => {
  const diff = compare(path1, path2);
  console.log(diff);
};
