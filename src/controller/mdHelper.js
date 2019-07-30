import _ from "lodash";

import { writeLine, writeBlank } from './file';

/**
 * Write a subheader to file
 * @param {*} text The text
 * @param {*} level The level 1 = # 2 =## ...
 */
const writeSubHeader = (text, level) => {
  const levelString = _.pad('', level, '#');
  writeLine(`${levelString} ${text}`);
  writeBlank();
};

export {
  writeSubHeader
};
