import moment from 'moment';
import _ from 'lodash';

import { logger } from './logger';
import { config } from './config';

let initData = [];

const getArgs = async () => {
  return _.slice(process.argv, 2);
};

const setup = async () => {
  const args = await getArgs();

  logger.debug('Starting setup!');
  moment.locale(_.get(config, 'locale'));
  const format = _.get(config, 'dateformat');

  const year = moment().format('Y');

  _.forEach(args, argComplete => {
    const splittedArg = _.split(argComplete, '/');
    const arg = splittedArg[0];
    const argYear = splittedArg[1];

    if (arg < 1 || arg > 52) {
      logger.error(`Number ${arg} is no valid week number!`);
      return;
    }

    const kwNumber = _.isEmpty(arg) ? moment().format('W') : moment(`${arg} ${argYear}`, 'ww gggg').format('W');
    const today = _.isEmpty(arg) ? moment() : moment(`${arg} ${argYear}`, 'ww gggg');

    const fromDate = today.startOf('isoWeek');
    const fromDateFormat = fromDate.format(format);
    const toDate = today.endOf('isoWeek');
    const toDateFormat = toDate.format(format);

    const filename = `KW${kwNumber}.md`;
    const path = _.get(config, 'path');

    let newData = {
      kwNumber,
      today,
      fromDate,
      fromDateFormat,
      toDate,
      toDateFormat,
      filename,
      path
    };
    initData.push(newData);
  });

  logger.debug('Setup done!');
};

export { initData, setup };
