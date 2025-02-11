import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { WebhooksModule } from './webhooks/webhook.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/webhook-service'),
    AuthModule,
    UsersModule,
    WebhooksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
