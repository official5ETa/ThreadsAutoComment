export const timeout = (timeout: number) => new Promise(resolve => setTimeout(resolve, timeout));

export const type = async (text: string, target: Window | Element = window) => {
  for (const char of text) {
    console.log("DISPATCH:", char);
    target.dispatchEvent(new KeyboardEvent('keydown', {
      key: char,
      bubbles: true,
    }));
    await timeout(Math.random() * 200);
    target.dispatchEvent(new KeyboardEvent('keyup', {
      key: char,
      bubbles: true,
    }));
    await timeout(Math.random() * 1e3);
  }
}