import _ from 'lodash';

import { config } from '../setup/config';
import { writeSubHeader } from './mdHelper';

class PreparedFunctions {

  /**
   * Write the days for a week
   */
  writeDays(data) { 
    const { days, dayDate, dateformat } = config;
    _.forEach(days, day => {
      let text = data.fromDate.day(day).format('dddd');
      if (dayDate) {
        const dateString = data.fromDate.day(day).format(dateformat);
        text = `${text} - ${dateString}`;
      }
      writeSubHeader(data, text, 3);
    });
  }
}

export {
  PreparedFunctions
};
