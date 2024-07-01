import { UsersService } from "src/users/users.service";
import * as bcrypt from 'bcrypt'
import { JwtService } from "@nestjs/jwt";
export class AuthService{
    constructor(
        private readonly UsersService : UsersService,
        private readonly JwtService : JwtService
    ){}

    async signup(user : any){
        const hashedPassword = bcrypt.hashSync(user.password, 10);
        const newUser = await this.UsersService.createUser({
            ...user, 
            password : hashedPassword
        });
        return user;
    }

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.UsersService.findOneByEmail(email);
        if (user && bcrypt.compareSync(pass, user.password)) {
          const { password, ...result } = user;
          return result;
        }
        return null;
      }
    async login(userData : any){
        const payload = { email : userData.email}
        if(!this.validateUser(userData.email, userData.password))
            return{
          error: "email or password is incorrect"}
        return {
          access_token: this.JwtService.sign(payload),
        };
    }

    
}