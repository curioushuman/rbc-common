/**
 * Using these interfaces to support various microservice configuration types
 * To be passed via ConfigObject to the microservices
 */
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

/**
 * This intersection type is used to support various microservice configuration types
 * During transition they will be reduced to ConfigObjects and strings
 */
export type MicroserviceConfig = Microservice &
  (KafkaMicroservice | OtherMicroservice);

/**
 * Then we'll create more focused intersections to be passed to the microservices
 * for stronger type checking at the other end
 */
export type KafkaConfig = KafkaMicroservice & Microservice;

/**
 * These are also used in transferring the configuration to the microservices
 */
export interface MicroservicesConfig {
  brokers: string[];
  services: Record<string, MicroserviceConfig>;
}

export class MicroservicesConfigGroup implements MicroservicesConfig {
  public services: Record<string, MicroserviceConfig> = {};
  constructor(
    public brokers: string[] = [],
    private serviceConfigs: MicroserviceConfig[],
  ) {
    serviceConfigs.forEach((serviceConfig) => {
      this.services[serviceConfig.groupId] = serviceConfig;
      this.services[serviceConfig.groupId].brokers = this.brokers;
    });
  }
}
