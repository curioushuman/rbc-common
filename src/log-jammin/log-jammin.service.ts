import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class LogJamminService extends ConsoleLogger {
  // error(message: any, stack?: string, context?: string) {
  //   // add your tailored logic here
  //   super.error(...arguments);
  // }
}
