import _ from 'lodash';

import { writeSubHeader } from './mdHelper';
import { initData } from '../setup/init';
import { config } from '../setup/config';
import { logger } from '../setup/logger';
import { PreparedFunctions } from './preparedFunctions.class';

let additionalTopics = {}; 
let preparedFunctions = {};

/**
 * Create the file header with level 1 => #
 */
const writeFileHeader = () => {  
  writeSubHeader(`Week ${initData.kwNumber} | ${initData.fromDateFormat} - ${initData.toDateFormat}`, 1);
};

/**
 * Write down a list of topics for one level
 * @param {*} topics 
 */
const writeTopics = (topics, level) => {
  _.forEach(topics, topic => {
    writeSubHeader(_.get(topic, 'name'), level);

    if (!_.isEmpty(_.get(topic, 'function'))) {
      try {
        preparedFunctions[_.get(topic, 'function')]();
      } catch (error) {
        logger.error(`Could not execute function from config. Topic: ${_.get(topic, 'name')} | Function: ${_.get(topic, 'function')} `);
        logger.error(`Error: ${error}`);
      }
    }
    // Recursive: write down child elements
    const values = getValues(_.get(topic, 'name'));
    if (!_.isEmpty(values)) {
      writeTopics(values, ++level);
    }

  });
};

/**
 * Select all values for a parent name or null
 * @param {*} parent 
 */
const getValues = (parent) => {
  return _.chain(additionalTopics)
    .orderBy(['order'], ['asc'])
    .filter({ 'parent': parent})
    .value();
};

/**
 * Write all additional topics
 */
const writeAdditionalTopics = () => {
  const values = getValues(null);
  writeTopics(values, 2);
};

/**
 * Write protocol start method
 */
const writeProtocol = async () => {
  additionalTopics = _.get(config, 'additionalTopics');
  preparedFunctions = new PreparedFunctions();
  writeFileHeader();
  writeAdditionalTopics();
};

export {
  writeProtocol
};
