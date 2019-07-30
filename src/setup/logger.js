import log4js from 'log4js';

var logger = {};

/**
 * Setup logger for project
 */
const setupLogger = async () => {
  logger = log4js.getLogger();
  logger.level = 'debug';
  logger.debug('Logger setup done!');
};

export {
  logger,
  setupLogger
};
