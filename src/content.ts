import { Query } from './classes/Query';
import { timeout } from './helper/helper';
import { Threads } from './modules/Threads';

(async () => {
  console.log("INIT");

  const threads = new Threads([
    new Query('a', 'test comment!')
  ]);

  console.log("WAIT FOR LOADING...");
  while (threads.loading)
    await timeout(1e3);

  await timeout(2e3);
  console.log("EXEC!");
  for (const thread of threads.threads) {
    await threads.executeQuery(thread);
    break;
  }

  console.log("DONE!");
})();