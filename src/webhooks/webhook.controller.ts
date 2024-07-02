import { Body, Controller, Delete, Get, Param, Post, Request, UseGuards } from "@nestjs/common";
import { WebhookService } from "./webhook.service";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Controller('webhooks')
export class WebhooksController {
    constructor(private WebhookService: WebhookService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    async subscribe(@Body() body: any) {
        return this.WebhookService.create({ ...body, userId: body.userId })
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async list(@Request() req: any) {
        return this.WebhookService.findAll(req.user.userId)
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async unsubscribe(@Param('id') id: string) {
        return this.WebhookService.delete(id);
    }
}