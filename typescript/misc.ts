/**
 * This is a wrapper around setTimeout() that works with await.
 * 
 * `await sleep(100)`;
 * @param ms How long in milliseconds to sleep.
 * @returns A promise that you can wait on.
 */
export function sleep(ms : number) {
  // https://stackoverflow.com/a/39914235/971955
return new Promise(resolve => setTimeout(resolve, ms));
}