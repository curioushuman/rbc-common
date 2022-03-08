import { MicroservicesConfigGroup, MicroserviceConfig } from '../';

describe('Microservices', () => {
  describe('Config', () => {
    describe('MicroservicesConfigGroup', () => {
      describe('constructor()', () => {
        it('should create a services object from services array, with clientId as the keys', () => {
          const brokers = ['kafka-srv:9092'];
          const serviceConfigs: MicroserviceConfig[] = [
            {
              name: 'KAFKA_SERVICE',
              clientId: 'kafka',
              groupId: 'kafka-consumer',
            },
            {
              name: 'BLUES_SERVICE',
              clientId: 'blues',
              groupId: 'blues-consumer',
            },
          ];
          const microservicesConfigGroup = new MicroservicesConfigGroup(
            brokers,
            serviceConfigs,
          );

          expect(Object.keys(microservicesConfigGroup.services).length).toEqual(
            2,
          );
          expect(microservicesConfigGroup.services.kafka.name).toEqual(
            'KAFKA_SERVICE',
          );
        });
      });
    });
  });
});
