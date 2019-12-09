import {Content} from './Content';
import Passport from './Passeport';

export default interface IClient {
  content: Content;
  passport: Passport;
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
  requestOffline<T>(data: T) {
    return new Promise<HttpResponse<T>>(resolve =>
      setTimeout(() => resolve(new HttpResponse<T>(data, 200)), 3000),
    );
  }
}
