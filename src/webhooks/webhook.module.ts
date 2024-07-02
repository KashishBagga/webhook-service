import { Module } from "@nestjs/common";
import { WebhooksController } from "./webhook.controller";
import { WebhookService } from "./webhook.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Webhook, WebhookSchema } from "./webhook.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: Webhook.name, schema: WebhookSchema }])],
    controllers: [WebhooksController],
    providers: [WebhookService]
})

export class WebhooksModule { }