import * as fs from 'fs';
import { EOL } from 'os';

import { initData } from '../setup/init';
import { logger } from '../setup/logger';

/**
 * Create file with data from initData
 */
const createFile = async () => {
  logger.debug(`Creating new protocol file ${initData.path}`);
  await fs.writeFileSync(initData.path, '');
};

/**
 * Write line into file
 * @param {*} text 
 */
const writeLine = async text => {  
  logger.debug(`${text}`);
  await fs.appendFileSync(initData.path, `${text}${EOL}`);
};

/**
 * Write blank line to file
 */
const writeBlank = async () => {
  await fs.appendFileSync(initData.path, EOL);
};

export {
  createFile,
  writeLine,
  writeBlank,
};
