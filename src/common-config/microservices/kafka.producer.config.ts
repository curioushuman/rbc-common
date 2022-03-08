import type { KafkaConfig } from '.';
import { KafkaConsumerConfig } from './exports';

export class KafkaProducerConfig extends KafkaConsumerConfig {
  constructor(kafkaConfig: KafkaConfig) {
    super(kafkaConfig);

    this.options.options.producer = {
      allowAutoTopicCreation: false,
      idempotent: false,
    };
  }
}
