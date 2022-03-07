import type { CommonConfig } from './types';

/**
 * Returns a config object to be injected into microservice based on common standards
 */
class CommonConfigService {
  /**
   * Let's keep it simple to begin with
   */
  static getConfig(): CommonConfig {
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
    return config;
  }
}

const config = CommonConfigService.getConfig;
export { config as Configuration };
