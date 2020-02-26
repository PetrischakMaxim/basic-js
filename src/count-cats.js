module.exports = function countCats(arr) {
  if (arr.lenght === 0) return 0;
  const cat = '^^';
  return arr
    .map(el => el)
    .join()
    .split(',')
    .filter(string => string === cat).length;
};
