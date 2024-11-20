import { Auth } from "./auth_schema.js";
import { Temp } from "../temp/temp_schema.js";
import { ApplicationError } from "../../middlewares/error_handler.js";
import { comparePassword, hashPassword } from "../../utils/bcrypt.js";
import { createToken } from "../../utils/jwt_sign.js";
import { randomBytes } from "crypto";


export default class AuthRepository {

  async signup(userData) {
    let tempUserData = await Temp.findOne({ email: userData.email });
    if (!tempUserData) {
      tempUserData = await Temp.create(userData);
    } else {
      tempUserData.username = userData.username;
      tempUserData.email = userData.email;
      tempUserData.password = userData.password;
      await tempUserData.save();
    }
    return tempUserData.id;
  }

  async confirmsignup(id) {
    const tempUser = await Temp.findById(id).select("+password");
    if (!tempUser) {
      throw new ApplicationError("confirmation link expired", 410);
    }
    await Auth.create({
      username: tempUser.username,
      email: tempUser.email,
      password: tempUser.password,
    });
    await tempUser.deleteOne();
  }

  async signin({ email, password }) {
    const user = await Auth.findOne({ email }).select("+password");
    if (!user) {
      throw new ApplicationError("user account does not exist", 404);
    }
    await comparePassword(password, user.password);
    const token = createToken({ id: user.id, email: user.email });
    return { user, token };
  }


  async googleLogin(email, username) {
    let user = await Auth.findOne({ email });
    if (!user) {
      user = await Auth.create({
        username,
        email,
        password: randomBytes(20).toString("hex"),
      });
    }
    const token = createToken({ id: user.id, email: user.email });

    return { user, token };
  }



  async updateUser({ username, phone, address, city,country, zip }, id) {
    const user = await Auth.findById(id);
    
    if (username) user.username = username;
    if (phone) user.phone = phone;
    if (address) user.address.address = address;
    if (city) user.address.city = city;
    if (zip) user.address.zip = zip;
    if (country) user.address.country = country;

    await user.save();

    return user;
  }

  async updateOtp(email, otp) {
    await Temp.findOneAndUpdate({ email }, { otp }, { upsert: true });
  }

  async changePassword({ email, password, otp }) {
    let userCredentials = await Temp.findOne({ email });

    if (userCredentials && userCredentials.otp == otp) {
      password = await hashPassword(password, 10);
      await User.findOneAndUpdate({ email }, { password });
      await userCredentials.deleteOne();
    } else {
      throw new ApplicationError("otp does not match", 400);
    }
  }


  async findUser(obj) {
    return await Auth.findOne(obj);
  }
}