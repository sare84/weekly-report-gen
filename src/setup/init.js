import moment from 'moment';
import _ from 'lodash';

import { logger } from './logger';
import { config } from './config';

let initData = {};

const getArgs = async () => {
  return _.slice(process.argv, 2);
};

const setup = async () => {
  const args = await getArgs();

  logger.debug('Starting setup!');
  moment.locale(_.get(config, 'locale'));
  const format = _.get(config, 'dateformat');
  
  const year = moment().format('Y');
  const kwNumber = _.isEmpty(args) ? moment().format('W') : moment(`${args[0]} ${year}`, 'ww gggg').format('W');
  const today = _.isEmpty(args) ? moment() : moment(`${args[0]} ${year}`, 'ww gggg');

  const fromDate = today.startOf('isoWeek');
  const fromDateFormat = fromDate.format(format);
  const toDate = today.endOf('isoWeek');
  const toDateFormat = toDate.format(format);
  
  const filename = `KW${kwNumber}.md`;
  const path = _.get(config, 'path');
  
  initData = {
    kwNumber,
    today,
    fromDate,
    fromDateFormat,
    toDate,
    toDateFormat,
    filename,
    path
  };
  logger.debug('Setup done!');
};

export { initData, setup };

