# Common

## Description

A holder for anything common I want to pass between the microservices

## Installation

Within your microservice:

```bash
# Install rbc-common (if you haven't)
$ npm i --save @curioushuman/rbc-common
```

### Using dependency injection

Then in your feature.module.ts

```typescript

import { Module } from '@nestjs/common';
import { CommonModule } from '@curioushuman/rbc-common';

import { FeatureController } from './feature.controller';
import { FeatureService } from './feature.service';

@Module({
  imports: [
    CommonModule
  ],
  controllers: [FeatureController],
  providers: [FeatureService],
})
export class FeatureModule {}

```

## Test

More effort, for more thorough testing needs to be put into place.

```bash
# run tests
$ npm run test
```
