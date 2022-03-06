import { Module } from '@nestjs/common';
import { LogJamminService } from './log-jammin.service';

@Module({
  providers: [LogJamminService],
  exports: [LogJamminService],
})
export class LoggerModule {}
