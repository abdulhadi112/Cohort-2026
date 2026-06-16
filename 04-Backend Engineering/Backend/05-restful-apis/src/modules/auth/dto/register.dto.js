import Joi from "joi";
import BaseDTO from "../../../common/dto/base.dto.js";
class RegisterDTO extends BaseDTO {
  static schema = Joi.object({
    name: Joi.string().trim().required(),
    email: Joi.string().email().trim().required(),
    password: Joi.string().min(8).required().message("Password must be at least 8 characters long"),
    role: Joi.string().valid('admin', 'customer', 'seller').default('customer'), // Enum check karne k liye use 'valid()'
  })
}

export default RegisterDTO