import { Transport } from '@nestjs/microservices';

type MicroserviceConfig = {
  name: string;
  clientId: string;
  groupId: string;
};

export type MicroservicesConfigGroup = {
  transport: Transport;
  broker: string;
  services: Record<string, MicroserviceConfig>;
};
