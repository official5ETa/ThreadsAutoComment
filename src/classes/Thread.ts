import { threadContainer, threadTexts, threadButton } from '../share/threadsQs';

export class Thread {

  static get threads(): Thread[] {
    const threads: Thread[] = [];
    for (const element of document.querySelectorAll(threadContainer))
      threads.push(new Thread(element));
    return threads;
  }

  private element!: Element;

  get message(): string {
    return this.element.querySelectorAll(threadTexts).item(1)?.textContent || '';
  }

  private get buttonList(): Element[] {
    const buttons: Element[] = [];
    for (const element of this.element.querySelectorAll(threadButton))
      buttons.push(element);
    return buttons;
  }

  get buttons() {
    const buttonList = this.buttonList as HTMLElement[];
    return {
      user: buttonList[0],
      more: buttonList[1],
      like: buttonList[2],
      comment: buttonList[3],
      repost: buttonList[4],
      share: buttonList[5],
    }
  }

  constructor(element: Element) {
    this.element = element;
  }
}