interface Microservice {
  name: string;
  clientId: string;
  groupId: string;
  brokers?: string[];
}

interface KafkaMicroservice {
  consumerTopic?: string;
  producerTopic?: string;
}

interface OtherMicroservice {
  balls?: string;
  pants?: string;
}

export type MicroserviceConfig = Microservice &
  (KafkaMicroservice | OtherMicroservice);

export interface MicroservicesConfig {
  brokers: string[];
  services: Record<string, MicroserviceConfig>;
}

export class MicroservicesConfigGroup implements MicroservicesConfig {
  public services: Record<string, MicroserviceConfig>;
  constructor(
    public brokers: string[] = [],
    private serviceConfigs: MicroserviceConfig[],
  ) {
    serviceConfigs.forEach((serviceConfig) => {
      this.services[serviceConfig.clientId] = serviceConfig;
    });
  }
}
