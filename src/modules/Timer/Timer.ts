class Timer {
  constructor() {}

  /**
   * Sleep Function
   * 
   * Sleep process at the wait time (ms)
   * @param waitMs wait time(ms)
   * @returns Promise 
   */
  sleep(waitMs: number): Promise<void> {
    return new Promise(function (resolve) {
      setTimeout(function() { resolve() }, waitMs)
    })
  }
}

export default Timer