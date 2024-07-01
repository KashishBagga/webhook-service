import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly AuthService : AuthService){}

    @Post('signup')
    async createUser(@Body() body : any){
        return this.AuthService.signup(body)
    }

    @Post('login')
    async loginUser(@Body() userData : any){
        return this.AuthService.login(userData)
    }
}