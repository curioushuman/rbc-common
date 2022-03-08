import type { App } from '.';
import type { Databases, MongoDb, Rdbms } from '../databases';
import type { MicroservicesConfigGroup } from '../microservices';

// TODO
// - currently ALL values are optional; I need to be able to mark some as required
// there is probably a simpler way to do this

type CommonConfigKeyValue<T extends string> = {
  [config in T]?: string | number;
};

type CommonConfigGroup<T extends string, U extends string> = {
  [config in T]?: CommonConfigKeyValue<U>;
};

type DatabaseConfigGroup = CommonConfigGroup<Databases, MongoDb | Rdbms>;
type AppConfigGroup = CommonConfigKeyValue<App>;

export type CommonConfig = {
  app: AppConfigGroup;
  database: DatabaseConfigGroup;
  microservices: MicroservicesConfigGroup;
};
