interface IConfig {
  urls: {
    content: string;
  };
  timeout?: number;
}

export interface IController {}

export default class Controller implements IController {
  readonly config: IConfig;
  private constructor(config: IConfig) {
    this.config = config;
  }

  public static create(config: IConfig): Promise<IController> {
    const controller = new Controller(config);
    return new Promise(resolve => setTimeout(() => resolve(controller), 1000));
  }
}
