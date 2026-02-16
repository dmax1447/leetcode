type StateParams = {url: string, next?: State, prev?: State}

class State {
  public url: string
  public next: State | null
  public prev: State | null
  constructor({url, prev, next}: StateParams) {
    this.url = url
    this.next = next ?? null
    this.prev = prev ?? null
  }
}

class BrowserHistory {
  public state: State
  constructor(homepage: string) {
    this.state = new State({url: homepage})
  }

  visit(url: string): void {
    const prev = this.state
    const newState = new State({url, prev})
    this.state =  newState
    prev.next = newState
  }

  back(steps: number): string {
    while(steps > 0 && this.state.prev) {
      this.state = this.state.prev
      steps--
    }
    return this.state.url
  }

  forward(steps: number): string {
    while(steps > 0 && this.state.next) {
      this.state = this.state.next
      steps--
    }
    return this.state.url
  }
}

const browser = new BrowserHistory('leetcode.com')
browser.visit('google.com')
browser.visit('facebook.com')
browser.visit('youtube.com')
browser.back(1)
browser.back(1)
browser.forward(1)

browser.visit("linkedin.com");     // You are in "facebook.com". Visit "linkedin.com"
browser.forward(2);                // You are in "linkedin.com", you cannot move forward any steps.
browser.back(2);

browser.back(7);
console.log(browser.state.url)
// console.log(browser)
