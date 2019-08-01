import * as fs from "fs";
import { EOL } from "os";

import { initData } from "../setup/init";
import { logger } from "../setup/logger";

const getFilenameWithPath = () => `${initData.path}${initData.filename}`;

/**
 * Create file with data from initData
 */
const createFile = async () => {
  const fileWithPath = getFilenameWithPath();
  const exists = await fs.existsSync(initData.path);
  if (!exists) {
    await fs.mkdirSync(initData.path);
    logger.debug(`Creating new path ${initData.path}`);
  }
  logger.debug(`Creating new protocol file ${fileWithPath}`);
  await fs.writeFileSync(fileWithPath, "");
};

/**
 * Write line into file
 * @param {*} text
 */
const writeLine = async text => {
  logger.debug(`${text}`);
  await fs.appendFileSync(getFilenameWithPath(), `${text}${EOL}`);
};

/**
 * Write blank line to file
 */
const writeBlank = async () => {
  await fs.appendFileSync(getFilenameWithPath(), EOL);
};

export { createFile, writeLine, writeBlank };
