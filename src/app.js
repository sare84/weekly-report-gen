import { setup } from './setup/init';
import { createFile } from './controller/file';
import { writeProtocol } from './controller/weekProtocolWriter';
import { setupLogger } from './setup/logger';
import { setupConfig } from './setup/config';

/**
 * Start the app
 */
const start = async () => {
  await setupConfig();
  await setupLogger();
  await setup();
  await createFile();
  await writeProtocol();
};

export {
  start,
};
