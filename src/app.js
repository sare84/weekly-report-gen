import { setup } from './setup/init';
import { createFile } from './controller/file';
import { writeProtocol } from './controller/weekProtocolWriter';
import { setupLogger } from './setup/logger';

/**
 * Start the app
 */
const start = async () => {
  await setupLogger();
  await setup();
  await createFile();
  await writeProtocol();
};

export {
  start,
};
