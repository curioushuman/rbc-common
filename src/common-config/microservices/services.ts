import type { MicroserviceConfig } from '.';

/**
 * This is a list of the services we currently have configured
 * At some point later I'm sure there is a fancier way of doing this
 */
export const services: MicroserviceConfig[] = [
  {
    name: 'AUTH_SERVICE',
    clientId: 'auth',
    groupId: 'auth-service',
  },
  {
    name: 'SUBSCRIPTIONS_SERVICE',
    clientId: 'subscriptions',
    groupId: 'subscriptions-service',
  },
];