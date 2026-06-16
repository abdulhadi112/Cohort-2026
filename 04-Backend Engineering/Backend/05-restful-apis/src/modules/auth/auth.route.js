import { Router } from "express";
import validate from "../../common/middlewares/validate.middleware.js";
import RegisterDTO from "./dto/register.dto.js"
import LoginDTO from "./dto/login.dto.js"
import * as controller from "./auth.controller.js";

const router = Router()


router.post('/register', validate(RegisterDTO), controller.register)
router.post('/login', validate(LoginDTO), controller.login)
export default router