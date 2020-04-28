import deepExtend from 'deep-extend';
import common from './common';
import test from './environments/test-env';
import { IConfig } from 'shared/types/config';

class Config {
  private static instance: Config;
  private config: IConfig;

  constructor() {
    this.config = this.loadConfig();
  }

  public static getInstance(): Config {
    Config.instance = Config.instance || new Config();
    return Config.instance;
  }

  public getApi() {
    return this.config.api;
  }

  public getSiteMeta() {
    return this.config.meta;
  }

  private loadConfig() {
    const envConfigs: Record<string, IConfig> = {
      test,
    };

    if (!process.env.NODE_ENV) {
      throw new Error('process.env.NODE_ENV not found');
    }

    return deepExtend(common, envConfigs[process.env.NODE_ENV]);
  }
}

export default Config;
