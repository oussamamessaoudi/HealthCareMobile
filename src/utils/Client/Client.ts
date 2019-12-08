import {IConfig} from '../models';
import {Content} from './Content';
import IClient from './model';
import Passport from './Passeport'

export default class Client implements IClient {
  readonly content: any;
  readonly passport: any;
  constructor(config: IConfig) {
    this.content = new Content(config.urls.content);
    this.passport = new Passport(config.urls.passport);
  }
}
