import {Api} from '../model';
import {fakerMarketing, IMarketing} from './model';

export class Content extends Api {
  readonly baseUrl: string;
  constructor(contentBaseUrl: string) {
    super();
    this.baseUrl = contentBaseUrl;
  }
  getMarketing() {
    return this.requestOffline<IMarketing[]>(fakerMarketing());
  }
}
