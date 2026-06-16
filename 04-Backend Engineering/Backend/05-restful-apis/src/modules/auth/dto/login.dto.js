import Joi from "joi";
import BaseDTO from "../../../common/dto/base.dto.js";

class LoginDTO extends BaseDTO {
  static schema = Joi.object({
    email: Joi.string().email().trim().required(),
    password: Joi.string().min(8).required().message("Password must be at least 8 characters long")
  })
}

export default LoginDTO