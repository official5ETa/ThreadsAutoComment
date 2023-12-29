import { Query } from '../classes/Query';
import { Thread } from '../classes/Thread';
import { timeout, type } from '../helper/helper';
import { commentInput, commentPopup, loadingSpinner } from '../share/threadsQs';

export class Threads {

  readonly queries: Query[] = [];

  get loading(): boolean {
    return document.querySelector(loadingSpinner)?.getBoundingClientRect()?.top! <= document.body.clientHeight
  }

  get threads(): Thread[] {
    return Thread.threads;
  }

  constructor(queries: Query[] = []) {
    this.queries = queries;
  }

  reload() {
    location.reload();
  }

  protected async comment(thread: Thread, comment: string) {
    thread.buttons.comment.click();

    let input: HTMLElement;
    do {
      await timeout(1e3);
      input = document.querySelector(commentPopup)?.querySelector(commentInput) as HTMLElement;
    }
    while (!input!);
    input.click();

    await type('test123', input);
    // TODO: type comment
    // TODO: post comment
  }

  async executeQuery(thread: Thread): Promise<Query | null> {
    for (const query of this.queries)
      if (query.query.test(thread.message)) {
        await this.comment(thread, query.comment)
        return query;
      }
    return null;
  }
}