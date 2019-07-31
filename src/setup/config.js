import _ from 'lodash';
import fs  from 'fs';

var config = {};
/**
 * Setup the config
 * Load config file and parse it
 */
const setupConfig = async () => {
  const configFile = _.get(process.env, 'CONFIG_FILE');
  const exists = await fs.existsSync(configFile);
  if (exists) {
    const file = await fs.readFileSync(configFile);
    config = JSON.parse(file);
  }
};

export {
  setupConfig,
  config,
};
