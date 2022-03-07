import { Transport } from '@nestjs/microservices';

export type MicroservicesConfigGroup = {
  transport: Transport;
  broker: string;
};
