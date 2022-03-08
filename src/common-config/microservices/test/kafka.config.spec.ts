import { KafkaConsumerConfig, KafkaProducerConfig } from '../exports';
import type { KafkaConfig } from '../';
import { Transport } from '@nestjs/microservices';

describe('Microservices', () => {
  const kafkaConfig: KafkaConfig = {
    name: 'KAFKA_NAME',
    clientId: 'kafka-client',
    brokers: ['kafka-broker'],
    groupId: 'kafka-service',
  };

  describe('Kafka config', () => {
    describe(KafkaConsumerConfig.name, () => {
      describe('constructor()', () => {
        it('should create a protected options property that is of type KafkaOptions', () => {
          const kafkaConsumerConfig = new KafkaConsumerConfig(kafkaConfig);

          const expected = {
            name: kafkaConfig.name,
            transport: Transport.KAFKA,
            options: {
              client: {
                clientId: kafkaConfig.clientId,
                brokers: kafkaConfig.brokers,
              },
              consumer: {
                groupId: kafkaConfig.groupId,
              },
            },
          };

          expect(kafkaConsumerConfig.get()).toEqual(expected);
        });
      });
    });
    describe(KafkaProducerConfig.name, () => {
      describe('constructor()', () => {
        it('should create a protected options property that is of type KafkaOptions', () => {
          const kafkaProducerConfig = new KafkaProducerConfig(kafkaConfig);

          const expected = {
            name: kafkaConfig.name,
            transport: Transport.KAFKA,
            options: {
              client: {
                clientId: kafkaConfig.clientId,
                brokers: kafkaConfig.brokers,
              },
              consumer: {
                groupId: kafkaConfig.groupId,
              },
              producer: {
                allowAutoTopicCreation: false,
                idempotent: false,
              },
            },
          };

          expect(kafkaProducerConfig.get()).toEqual(expected);
        });
      });
    });
  });
});
