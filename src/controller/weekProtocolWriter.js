import _ from 'lodash';

import { writeSubHeader } from './mdHelper';
import { config } from '../setup/config';
import { logger } from '../setup/logger';
import { PreparedFunctions } from './preparedFunctions.class';

let additionalTopics = {}; 
let preparedFunctions = {};

/**
 * Create the file header with level 1 => #
 */
const writeFileHeader = (data) => {  
  writeSubHeader(data, `Week ${data.kwNumber} | ${data.fromDateFormat} - ${data.toDateFormat}`, 1);
};

/**
 * Write down a list of topics for one level
 * @param {*} topics 
 */
const writeTopics = (data, topics, level) => {
  _.forEach(topics, topic => {
    writeSubHeader(data, _.get(topic, 'name'), level);

    if (!_.isEmpty(_.get(topic, 'function'))) {
      try {
        preparedFunctions[_.get(topic, 'function')](data);
      } catch (error) {
        logger.error(`Could not execute function from config. Topic: ${_.get(topic, 'name')} | Function: ${_.get(topic, 'function')} `);
        logger.error(`Error: ${error}`);
      }
    }
    // Recursive: write down child elements
    const values = getValues(_.get(topic, 'name'));
    if (!_.isEmpty(values)) {
      writeTopics(data, values, ++level);
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
const writeAdditionalTopics = (data) => {
  const values = getValues(null);
  writeTopics(data, values, 2);
};

/**
 * Write protocol start method
 */
const writeProtocol = async (data) => {
  additionalTopics = _.get(config, 'additionalTopics');
  preparedFunctions = new PreparedFunctions();
  writeFileHeader(data);
  writeAdditionalTopics(data);
};

export {
  writeProtocol
};
