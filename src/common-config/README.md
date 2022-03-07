# Common

## Description

A config library for all microservices. This way we'll keep naming conventions consistent.

## Installation

Within your microservice:

```bash
# Install rbc-common (if you haven't)
$ npm i --save @curioushuman/rbc-common
```

### Using dependency injection

**Not possible** as ConfigModule offers no forRootAsync function.

### Export/import

Then in your app.module.ts:

TBC

## Test

More effort, for more thorough testing needs to be put into place.

```bash
# run tests
$ npm run test
```

## Expanding this work

I've broken the configuration down into objects, and groups of objects. As you continue to build out this common config you can break down, and put back together, using these building blocks.

At the end of the day you'll need to provide a CommonConfig to your microservice.

```typescript
const mongoConfig: CommonConfigKeyValue<MongoDb> = {
  uri: 'mongodb://localhost:27017/nestjs',
};

const dbConfig: CommonConfigGroup<Databases, MongoDb> = {
  mongodb: {
    uri: 'mongodb://localhost:27017/nestjs',
  },
};

const config: CommonConfig = {
  database: {
    mongodb: {
      uri: 'mongodb://localhost:27017/nestjs',
    },
  },
  microservices: {
    transport: Transport.KAFKA,
    broker: 'kafka-srv'
  },
  host: {
    port: 3000,
  },
};
```

We're also centralising the naming conventions for environment variables for these things. Better documentation, structure and type checking on these should be implemented.

```typescript
getConfig(): CommonConfig {
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
```
