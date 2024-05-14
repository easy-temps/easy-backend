import { Module } from '@nestjs/common';
import { AppController } from './controller/app/app.controller';
import { AppService } from './service/app.service';
import { ConfigModule } from '@nestjs/config';

import configuration from './config/configuration'
import {ProseController} from "./controller/project/prose/proseController";

@Module({
  imports: [ConfigModule.forRoot({
    load:[configuration]
  })],
  controllers: [AppController,ProseController],
  providers: [AppService],
})
export class AppModule {}
