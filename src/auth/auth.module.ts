import { Module } from "@nestjs/common";
import { UsersModule } from "src/users/users.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [
        UsersModule,
        JwtModule.register({
            secret: 'webhook-service',
            signOptions: { expiresIn: '60m' },
        })
    ],
    controllers: [AuthController],
    providers: [AuthService]
})

export class AuthModule { }