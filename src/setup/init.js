import moment from 'moment';
import _ from 'lodash';

import { logger } from './logger';
import { config } from './config';

let initData = {};

const setup = async () => {
  logger.debug('Starting setup!');
  moment.locale(_.get(config, 'locale'));
  const format = _.get(config, 'dateformat');
  
  const kwNumber = moment().format('W');
  const today = moment();
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

