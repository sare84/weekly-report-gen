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
  
  _.forEach(additionalTopics, topic => {
    writeSubHeader(_.get(topic, 'name'), _.get(topic, 'level'));
  });
};

const writeNotes = () => {
  writeSubHeader('Notizen', 2);
};

const writeTodo = () => {
  writeSubHeader('Todo', 2);
};

const writeDone = () => {
  writeSubHeader('Done', 2);
};

const writeAdditional = () => {
  writeSubHeader('Sonstiges', 2);
};

const writeProtocol = async () => {
  writeFileHeader();
  writeDays();
  // writeNotes();
  // writeTodo();
  // writeDone();
  // writeAdditional();
  writeAdditionalTopics();
};

export {
  writeProtocol
};
