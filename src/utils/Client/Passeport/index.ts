import {Api} from '../model';
import {fakerUser, IUser} from './model';

export default class Passport extends Api {
  readonly baseUrl: string;
  constructor(contentBaseUrl: string) {
    super();
    this.baseUrl = contentBaseUrl;
  }

  authenticate(username: string, password: string) {
    return this.requestOffline<IUser>(fakerUser(username));
  }
}
