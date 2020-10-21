import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FriendsModule } from './friends/friends.module';

@Module({
  imports: [FriendsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
