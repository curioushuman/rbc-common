import type { Databases, MongoDb, Rdbms } from '.';
import type { Host } from '.';

// TODO
// - currently ALL values are optional; I need to be able to mark some as required
// there is probably a simpler way to do this

// * NOTES
// ConfigObject (which is where this goes towards) uses the following (classic) type declaration
// export declare type ConfigObject = Record<string, any>;

type CommonConfigKeyValue<T extends string> = {
  [config in T]?: string | number;
};

type CommonConfigGroup<T extends string, U extends string> = {
  [config in T]?: CommonConfigKeyValue<U>;
};

export type CommonConfig = {
  database: CommonConfigGroup<Databases, MongoDb | Rdbms>;
  host: CommonConfigKeyValue<Host>;
};
