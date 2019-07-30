import moment from 'moment';

import { logger } from './logger';

let initData = {};
const format = 'DD.MM.YYYY';

const setup = async () => {
  logger.debug('Starting setup!');
  moment.locale('de');
  
  const kwNumber = moment().format('W');
  const today = moment();
  const fromDate = today.startOf('isoWeek');
  const fromDateFormat = fromDate.format(format);
  const toDate = today.endOf('isoWeek');
  const toDateFormat = toDate.format(format);
  
  const filename = `KW${kwNumber}.md`;
  const path = `.\\reports\\${filename}`;
  
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

