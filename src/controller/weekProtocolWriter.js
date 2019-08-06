import _ from 'lodash';

import { writeSubHeader } from './mdHelper';
import { initData } from '../setup/init';
import { config } from '../setup/config';

const writeFileHeader = () => {  
  writeSubHeader(`Week ${initData.kwNumber} | ${initData.fromDateFormat} - ${initData.toDateFormat}`, 1);
};

class PreparedFunctions {
  writeDays() { 
    const days = _.get(config, 'days');
    _.forEach(days, day => {
      const text = initData.fromDate.day(day).format('dddd');
      writeSubHeader(text, 3);
    });
  }
}



const writeAdditionalTopics = () => {
  const preperedFunctions = new PreparedFunctions();
  const additionalTopics = _.get(config, 'additionalTopics');
  const ordered = _.orderBy(additionalTopics, ['order'], ['asc']);
  _.forEach(ordered, topic => {
    writeSubHeader(_.get(topic, 'name'), _.get(topic, 'level'));
    if (!_.isEmpty(_.get(topic, 'function'))) {
      preperedFunctions[_.get(topic, 'function')]();
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
