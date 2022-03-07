import { ConfigObject } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';

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
      microservices: {
        transport: Transport.KAFKA,
        broker: 'kafka-srv',
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

const configObject = CommonConfigService.getConfig();
const configFactory = () => configObject;
export { configObject, configFactory };
