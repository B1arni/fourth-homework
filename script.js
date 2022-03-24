'use strict';

const ERROR = new Error('Некорректыне даные');

function concatStings(string, separator) {
  let currentStr = '';

  function increaseCurrentStr(str) {
    if (typeof str === 'string') {
      return (currentStr = currentStr + str);
    }
  }

  increaseCurrentStr(string);
  increaseCurrentStr(separator);

  function nextStr(string, separator) {
    increaseCurrentStr(string);
    increaseCurrentStr(separator);

    return nextStr;
  }

  nextStr.toString = function () {
    return currentStr;
  };

  return nextStr;
}

class Calculator {
  constructor(xValue, yValue) {
    this.validator(xValue);
    this.validator(yValue);
    this.xValue = xValue;
    this.yValue = yValue;
  }

  validator(checkedValue) {
    if (
      typeof checkedValue !== 'number' ||
      isNaN(checkedValue) ||
      !isFinite(checkedValue)
    ) {
      throw ERROR;
    }
  }

  setX = num => {
    this.validator(num);

    return (this.xValue = num);
  };

  setY = num => {
    this.validator(num);

    return (this.yValue = num);
  };

  logSum = () => {
    return this.xValue + this.yValue;
  };

  logMul = () => {
    return this.xValue * this.yValue;
  };

  logSub = () => {
    return this.xValue - this.yValue;
  };

  logDiv = () => {
    return this.xValue / this.yValue;
  };
}
