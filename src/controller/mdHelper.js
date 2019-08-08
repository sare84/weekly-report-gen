import _ from "lodash";

import { writeLine, writeBlank } from './file';

/**
 * Write a subheader to file
 * @param {*} text The text
 * @param {*} level The level 1 = # 2 =## ...
 */
const writeSubHeader = (data, text, level) => {
  const levelString = _.pad('', level, '#');
  writeLine(data, `${levelString} ${text}`);
  writeBlank(data);
};

export {
  writeSubHeader
};
