import _ from 'lodash';

import { writeSubHeader } from './mdHelper';
import { initData } from '../setup/init';
import { config } from '../setup/config';
import { logger } from '../setup/logger';
import { PreparedFunctions } from './preparedFunctions.class';

const writeFileHeader = () => {  
  writeSubHeader(`Week ${initData.kwNumber} | ${initData.fromDateFormat} - ${initData.toDateFormat}`, 1);
};


const writeAdditionalTopics = () => {
  const preperedFunctions = new PreparedFunctions();
  const additionalTopics = _.get(config, 'additionalTopics');
  const ordered = _.orderBy(additionalTopics, ['order'], ['asc']);
  _.forEach(ordered, topic => {
    writeSubHeader(_.get(topic, 'name'), _.get(topic, 'level'));
    if (!_.isEmpty(_.get(topic, 'function'))) {
      try {
        preperedFunctions[_.get(topic, 'function')]();
      } catch (error) {
        logger.error(`Could not execute function from config. Topic: ${_.get(topic, 'name')} | Function: ${_.get(topic, 'function')} `);
        logger.error(`Error: ${error}`);
      }
    }
  });
};

const writeProtocol = async () => {
  writeFileHeader();
  writeAdditionalTopics();
};

export {
  writeProtocol
};
