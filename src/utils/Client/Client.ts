import {IConfig} from '../models';
import {Content} from './Content';
import IClient from './model';

export default class Client implements IClient {
  readonly content: any;
  constructor(config: IConfig) {
    this.content = new Content(config.urls.content);
  }
}
