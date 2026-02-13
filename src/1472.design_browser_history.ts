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
    this.state = new State({url, prev})
  }

  back(steps: number): string {
    console.log(`--- back start, ${steps}`)
    console.log('before', this.state)
    while(steps > 0 && this.state.prev) {
      this.state = this.state.prev
      steps--
    }
    console.log('after', this.state)
    console.log('--- back end')
    return this.state.url
  }

  forward(steps: number): string {
    console.log(`--- forward start, ${steps}`)
    console.log('before', this.state)
    while(steps > 0 && this.state.next) {
      this.state = this.state.next
      steps--
    }
    console.log('after', this.state)
    console.log('forward end')
    return this.state.url
  }
}



/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

const browser = new BrowserHistory('leetcode.com')
browser.visit('google.com')
