import _ from 'lodash';

import { writeSubHeader } from './mdHelper';
import { initData } from '../setup/init';
import { config } from '../setup/config';

const writeFileHeader = () => {  
  writeSubHeader(`KW ${initData.kwNumber} | ${initData.fromDateFormat} - ${initData.toDateFormat}`, 1);
};

const writeDays = () => {
  writeSubHeader('Tage', 2);

  const days = _.get(config, 'days');
  _.forEach(days, day => {
    const text = initData.fromDate.day(day).format('dddd');
    writeSubHeader(text, 3);
  });
};

const writeAdditionalTopics = () => {
  const additionalTopics = _.get(config, 'additionalTopics');
  const ordered = _.orderBy(additionalTopics, ['order'], ['asc']);
  _.forEach(ordered, topic => {
    writeSubHeader(_.get(topic, 'name'), _.get(topic, 'level'));
  });
};

const writeProtocol = async () => {
  writeFileHeader();
  writeDays();
  writeAdditionalTopics();
};

export {
  writeProtocol
};
