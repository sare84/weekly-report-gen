import * as fs from "fs";
import { EOL } from "os";

import { logger } from "../setup/logger";

const getFilenameWithPath = (data) => `${data.path}${data.filename}`;

/**
 * Create file with data from data
 */
const createFile = async (data) => {
  const fileWithPath = getFilenameWithPath(data);
  const exists = await fs.existsSync(data.path);
  if (!exists) {
    await fs.mkdirSync(data.path);
    logger.debug(`Creating new path ${data.path}`);
  }
  logger.debug(`Creating new protocol file ${fileWithPath}`);
  await fs.writeFileSync(fileWithPath, "");
};

/**
 * Write line into file
 * @param {*} text
 */
const writeLine = async (data, text) => {
  logger.debug(`${text}`);
  await fs.appendFileSync(getFilenameWithPath(data), `${text}${EOL}`);
};

/**
 * Write blank line to file
 */
const writeBlank = async (data) => {
  await fs.appendFileSync(getFilenameWithPath(data), EOL);
};

export { createFile, writeLine, writeBlank };
