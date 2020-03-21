module.exports = function repeater(str, options) {
  const {
    separator = "+",
    addition = "",
    additionSeparator = "|",
    additionRepeatTimes = 1,
    repeatTimes = 1
  } = options;

  const result =
    addition !== ""
      ? repeater(addition, {
          repeatTimes: additionRepeatTimes,
          separator: additionSeparator
        })
      : "";

  return Array.from({ length: repeatTimes }, () => `${str}${result}`).join(
    separator
  );
};
