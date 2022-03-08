import { MicroservicesConfigGroup, services } from '../';

describe('Microservices', () => {
  describe('Config', () => {
    describe('MicroservicesConfigGroup', () => {
      describe('constructor()', () => {
        it('should create a services object from services array, with groupId as the keys', () => {
          const brokers = ['kafka-srv:9092'];
          const service = services[0];
          const microservicesConfigGroup = new MicroservicesConfigGroup(
            brokers,
            services,
          );

          expect(Object.keys(microservicesConfigGroup.services).length).toEqual(
            services.length,
          );
          expect(
            microservicesConfigGroup.services[service.groupId].groupId,
          ).toEqual(service.groupId);
          expect(
            microservicesConfigGroup.services[service.groupId].brokers,
          ).toEqual(brokers);
        });
      });
    });
  });
});
