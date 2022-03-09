import type { KafkaConfig } from '.';
import { KafkaClientConfig } from '.';

export class KafkaConsumerConfig extends KafkaClientConfig {
  constructor(kafkaConfig: KafkaConfig) {
    super(kafkaConfig);

    this.options.options.consumer = {
      groupId: kafkaConfig.groupId,
    };
  }
}
