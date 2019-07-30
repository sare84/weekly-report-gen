import { setup } from './src/setup/init';
import { createFile } from './src/controller/file';
import { writeProtocol } from './src/controller/weekProtocolWriter';
import { setupLogger } from './src/setup/logger';

/**
 * Start the app
 */
const start = async () => {
  await setupLogger();
  await setup();
  await createFile();
  await writeProtocol();
};

start();