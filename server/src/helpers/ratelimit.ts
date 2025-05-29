export default class RateLimiter {
  public readonly limit: number;
  public readonly interval: number;
  public readonly releaseDelay: number;

  private nextId = 0;
  private requests: { id: number; time: number }[] = [];
  private waiting: (() => void)[] = [];

  constructor(limit: number, interval: number, releaseDelay = 1) {
    this.limit = limit;
    this.interval = interval;
    this.releaseDelay = releaseDelay;
  }

  public async request<T>(cb: () => T): Promise<Awaited<T>> {
    if (this.hasReachedLimit()) {
      await new Promise<void>((resolve) => this.waiting.push(resolve));
    }

    const req = this.pushRequest();
    const res = await cb();

    const timeToRelease = this.interval + this.releaseDelay;
    setTimeout(() => {
      this.removeRequest(req.id);
      this.nextWaiting();
    }, timeToRelease);

    return res;
  }

  private pushRequest() {
    const req = { id: this.nextId++, time: Date.now() };
    this.requests.push(req);

    return req;
  }

  private removeRequest(reqId: number) {
    this.requests = this.requests.filter((req) => req.id !== reqId);
  }

  private nextWaiting() {
    if (this.waiting.length > 0) {
      const resolve = this.waiting.shift()!;
      resolve();
    }
  }

  private hasReachedLimit(): boolean {
    return this.requests.length >= this.limit;
  }
}
