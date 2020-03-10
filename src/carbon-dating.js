const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const TIME = 0.693;
  if(typeof(sampleActivity) !== 'string' || isNaN(parseFloat(sampleActivity)) || Number(sampleActivity) <= 0 || Number(sampleActivity) > MODERN_ACTIVITY) {
    return false;
  }
  return Math.ceil((Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (TIME / HALF_LIFE_PERIOD)));
};
