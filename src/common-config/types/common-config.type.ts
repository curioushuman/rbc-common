import type { Databases, MongoDb, Rdbms } from '.';
import type { Host } from '.';
import type { MicroservicesConfigGroup } from '.';

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
type HostConfigGroup = CommonConfigKeyValue<Host>;

export type CommonConfig = {
  database: DatabaseConfigGroup;
  host: HostConfigGroup;
  microservices: MicroservicesConfigGroup;
};
