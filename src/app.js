import { setup } from './setup/init';
import { setupLogger } from './setup/logger';
import { setupConfig } from './setup/config';
import { createProtocols } from './controller/createProtocols';

/**
 * Start the app
 */
const start = async () => {
  await setupConfig();
  await setupLogger();
  await setup();
  await createProtocols();
};

export {
  start,
};
