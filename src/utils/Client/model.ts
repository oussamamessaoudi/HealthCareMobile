import {Content} from './Content';

export default interface IClient {
  content: Content;
}
export class HttpResponse<T> {
  readonly data: T;
  readonly status: number;
  constructor(data: T, status: number) {
    this.data = data;
    this.status = status;
  }
}
export class Api {
  async requestOffline<T>(data: T) {
    return new HttpResponse<T>(data, 200);
  }
}
