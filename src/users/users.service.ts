import { InjectModel } from "@nestjs/mongoose";
import { User } from "./users.schema";
import { Model } from "mongoose";

export class UsersService{
    constructor(@InjectModel(User.name) private UserModel: Model<User>){}

    async createUser(body : any): Promise<User>{
        const newUser = new this.UserModel(body)
        return newUser.save()
    }
    async findOneByEmail(email: string): Promise<User | undefined> {
        return this.UserModel.findOne({ email }).exec();
      }
}