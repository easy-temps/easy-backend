import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import configuration from '../config/configuration';
import { ProseController } from '../prose/prose.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  controllers: [ProseController],
  providers: [],
})
export class AppModule {}
