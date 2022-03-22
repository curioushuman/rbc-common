import { Transport, NatsOptions } from '@nestjs/microservices';

export type NatsClientOptions = { name: string } & NatsOptions;

export class NatsClientConfig {
  protected options: NatsClientOptions;

  constructor() {
    // const productionTmp = false;

    this.options = {
      name: 'nats',
      transport: Transport.NATS,
      options: {
        servers: this.servers(),
      },
    };
  }

  public get(): NatsClientOptions {
    return this.options;
  }

  private servers(): string[] {
    return [this.buildServerUri()];
  }

  private buildServerUri(): string {
    const releaseNamespace = process.env.RBC_RELEASE_NAMESPACE;
    const natsPort = process.env.RBC_NATS_PORT || 4222;
    if (process.env.RBC_DEBUG) {
      console.log('NatsConfig:releaseNamespace', releaseNamespace);
      console.log('NatsConfig:natsPort', natsPort);
    }
    return `nats://${releaseNamespace}-nats.${releaseNamespace}.svc.cluster.local:${natsPort}`;
  }
}
