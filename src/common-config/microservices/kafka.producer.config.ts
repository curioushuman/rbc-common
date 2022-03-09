import type { KafkaConfig } from '.';
import { KafkaClientConfig } from '.';

export class KafkaProducerConfig extends KafkaClientConfig {
  constructor(kafkaConfig: KafkaConfig) {
    super(kafkaConfig);

    this.options.options.producer = {
      allowAutoTopicCreation: true,
      idempotent: false,
    };
  }
}
