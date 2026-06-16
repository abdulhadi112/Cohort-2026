import * as auth from "./auth.service.js"
import ApiResponse from "../../common/utils/api-response.js"


const register = async (req, res) => {
  const user = await auth.register(req.body)
  ApiResponse.created(res, "User registration successful", user)
}

const login = async (req, res) => {
  await auth.login(req.body)
}
export { register }