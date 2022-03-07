import { Module } from '@nestjs/common';
import { CommonService } from './common.service';

// TODO
// - write a script that will accept an argument, and build a library based on this directory

@Module({
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
