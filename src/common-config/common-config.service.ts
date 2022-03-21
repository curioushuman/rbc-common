import { ConfigFactory, ConfigObject } from '@nestjs/config';

import { appConfig, CommonConfig } from './types';
import { MicroservicesConfigGroup, services } from './microservices';
import type { MicroserviceConfig } from './microservices';
import { mongoDbConfig } from './databases';

// TODO
// * Testing
// - make brokers an array of strings
// - convert this back into an injectable so you can use it amongst your other common libraries (via DI)
//   - leave the additional exports below so it can still be used in it's current form

/**
 * Returns a config object to be injected into microservice based on common standards
 */
class CommonConfigService {
  private static readonly brokers: string[] = ['kafka-srv:9092'];
  private static readonly services: MicroserviceConfig[] = services;

  static getConfig(): ConfigFactory {
    const config: CommonConfig = {
      app: appConfig(),
      database: {
        mongodb: mongoDbConfig(),
      },
      microservices: new MicroservicesConfigGroup(this.brokers, this.services),
    };

    return this.getConfigFactory(config);
  }

  static getConfigFactory(config: CommonConfig): ConfigFactory {
    let configObject: ConfigObject = {};
    configObject = Object.assign(configObject, config);
    return () => configObject;
  }
}

const configFactory = CommonConfigService.getConfig();
export { configFactory };
