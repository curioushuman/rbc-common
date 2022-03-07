import { ConfigObject } from '@nestjs/config';
import type { CommonConfig } from './types';

/**
 * Returns a config object to be injected into microservice based on common standards
 */
class CommonConfigService {
  /**
   * Let's keep it simple to begin with
   */
  static getConfig(): ConfigObject {
    const config: CommonConfig = {
      database: {
        mongodb: {
          uri: process.env.MONGODB_URI,
        },
      },
      host: {
        port: process.env.PORT,
      },
    };

    return this.getConfigFactory(config);
  }

  static getConfigFactory(config: CommonConfig): ConfigObject {
    let configObject: ConfigObject = {};
    configObject = Object.assign(configObject, config);
    return configObject;
  }
}

const config = CommonConfigService.getConfig();
export { config as Configuration };
