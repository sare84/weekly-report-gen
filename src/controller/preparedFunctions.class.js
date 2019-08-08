import _ from 'lodash';

import { config } from '../setup/config';
import { initData } from '../setup/init';
import { writeSubHeader } from './mdHelper';

class PreparedFunctions {

  /**
   * Write the days for a week
   */
  writeDays(data) { 
    const days = _.get(config, 'days');
    _.forEach(days, day => {
      const text = data.fromDate.day(day).format('dddd');
      writeSubHeader(data, text, 3);
    });
  }
}

export {
  PreparedFunctions
};
