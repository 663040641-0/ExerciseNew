import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {User} from "./users/entities/user.entity";
import {UsersModule} from "./users/users.module";

@Module({
  imports: [UsersModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
