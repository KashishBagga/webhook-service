import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Webhook } from "./webhook.schema";
import { Model } from "mongoose";

@Injectable()
export class WebhookService {
    constructor(@InjectModel('Webhook') private WebhookModel: Model<Webhook>) { }

    async create(webhook: Webhook): Promise<Webhook> {
        const newWebhook = new this.WebhookModel(webhook)
        return newWebhook.save()
    }

    async findAll(userId: string): Promise<Webhook[]> {
        return this.WebhookModel.find({ userId }).exec();
    }
    async delete(webhookId: string): Promise<any> {
        return this.WebhookModel.findByIdAndDelete(webhookId).exec();
    }
}