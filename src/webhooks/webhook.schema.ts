import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

export type WebhookDocument = Webhook & Document;

@Schema()
export class Webhook {
    @Prop({ required: true })
    sourceUrl: string;

    @Prop({ required: true })
    callbackUrl: string;

    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    userId: string;
}

export const WebhookSchema = SchemaFactory.createForClass(Webhook)