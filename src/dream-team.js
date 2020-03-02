module.exports = function createDreamTeam(arr) {
  if (!arr || arr.length == 0 || !Array.isArray(arr)) return false;
  return arr
    .filter(el => typeof el == 'string')
    .map(el => el.trim().slice(0, 1).toUpperCase())
    .sort()
    .join('');
};
