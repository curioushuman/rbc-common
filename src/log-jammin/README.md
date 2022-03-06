# LogJammin

A Jackie Treehorn production, care of the Big Lebowski.

## Description

A logging service I can share amongst microservices.

## Installation

Within your microservice:

```bash
# Install rbc-common (if you haven't)
$ npm i --save @curioushuman/rbc-common
```

### Logger

TBC

### Middleware

Then in your app.module.ts

```typescript

import { Module, MiddlewareConsumer } from '@nestjs/common';
import { HttpLoggerMiddleware } from '@curioushuman/rbc-common';

// TODO
// - move config to common

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HttpLoggerMiddleware);
  }
}

```

## Test

More effort, for more thorough testing needs to be put into place.

```bash
# run tests
$ npm run test
```
