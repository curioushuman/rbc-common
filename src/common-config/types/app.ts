import type { CommonConfigKeyValue } from './common-config';

/**
 * TODO
 * [ ] replace the functions with class definitions
 */

export type AppConfigGroup = CommonConfigKeyValue<App>;

export enum App {
  Port = 'port',
  Env = 'env',
  Release = 'release',
  Name = 'name',
}

export function appConfig(): AppConfigGroup {
  return {
    port: process.env.RBC_SVC_PORT,
    name: process.env.RBC_APP_NAME,
    release: process.env.RBC_RELEASE_NAME,
    env: process.env.NODE_ENV || 'development',
  };
}
