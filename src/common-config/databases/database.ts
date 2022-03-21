import type {
  CommonConfigGroup,
  CommonConfigKeyValue,
} from '../types/common-config';

/**
 * TODO
 * [ ] replace the functions with class definitions
 */

export enum Databases {
  MongoDb = 'mongodb',
  Rdbms = 'rdbms',
}

export enum MongoDb {
  Uri = 'uri',
  UriTest = 'uriTest',
}

// TBC when I get to this point
export enum Rdbms {
  Uri = 'uri',
}

export type DatabaseConfigGroup = CommonConfigGroup<Databases, MongoDb | Rdbms>;

function mongoUri() {
  console.log('process.env', process.env);
  const appName = process.env.RBC_APP_NAME;
  const releaseName = process.env.RBC_RELEASE_NAME.toUpperCase();
  const dbSvcName = process.env.RBC_DATABASE_SVC_NAME.replace(
    /-/gi,
    '_',
  ).toUpperCase();
  const dbName = process.env.RBC_DATABASE_NAME || appName;
  const dbPort = process.env.RBC_DATABASE_PORT || 27107;
  const hostEnv = `${releaseName}_${dbSvcName}_SERVICE_HOST`;
  console.log('hostEnv', hostEnv);
  const dbHost = process.env[hostEnv];
  return `mongodb://${dbHost}:${dbPort}/${dbName}`;
}

export function mongoDbConfig(): CommonConfigKeyValue<MongoDb> {
  const uri = mongoUri();
  return {
    uri,
    uriTest: `${uri}-test`,
  };
}
