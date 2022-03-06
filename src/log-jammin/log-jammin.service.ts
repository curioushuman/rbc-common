import { ConsoleLogger, Injectable } from '@nestjs/common';

// TODO
// - use this as your logger in all microservices
// - create some basic standards for error handling etc

@Injectable()
export class LogJamminService extends ConsoleLogger {
  // error(message: any, stack?: string, context?: string) {
  //   // add your tailored logic here
  //   super.error(...arguments);
  // }
}
