import _ from 'lodash';

import { createFile } from './file';
import { writeProtocol } from './weekProtocolWriter';
import { initData } from "../setup/init";

/**
 * Create one file for each initData entry
 */
const createProtocols = async () => {
  _.forEach(initData, async data => {
    await createFile(data);
    await writeProtocol(data);
  });
};

export {
  createProtocols
};
