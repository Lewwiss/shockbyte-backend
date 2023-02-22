import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateController } from './create/create.controller';

@Module({
  imports: [],
  controllers: [AppController, CreateController],
  providers: [AppService],
})
export class AppModule {}
