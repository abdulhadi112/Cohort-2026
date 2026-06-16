import { User } from "./auth.model.js"
import ApiError from "../../common/utils/api-error.js"
import { generateResetToken, verifyRefreshToken } from "../../common/utils/jwt.utils.js"
import { generateAccessToken, generateRefreshToken, hashToken } from "../../common/utils/jwt.utils.js"

const register = async ({ name, email, password, role }) => {
  // destructuring of the valid values from the req.body
  const existingUser = await User.findOne({ email })
  if (existingUser) throw ApiError.conflict("User with this email already exists")


  const { rawToken, hashedToken } = generateResetToken()

  const user = await User.create({
    name,
    email,
    password,
    verficationToken: hashedToken
  })


  if (!user) {
    throw ApiError.serverError("Error while creating user")
  }
  console.log('User after creating : \n', user);

  // Send an email to user with token : rawtoken

  const userObj = user.toObject()
  delete userObj.password
  delete userObj.verficationToken


  return userObj // return the registered user

}

const login = async ({ email, password }) => {
  const user = await User.findOne({ email })
  if (!user) {
    throw ApiError.unauthorized("Invalid Credentials")
  }
  console.log('User :\n', user);

  // checking the password (comparing the password with hashed password stored in the DB)

  // checking if the user is verified
  if (!user.isVerified) {
    throw ApiError.forbidden("Please verify email before log-in")
  }
  // Generating & setting the tokens
  const accessToken = generateAccessToken({ id: user._id, role: user.role })
  const refreshToken = generateRefreshToken({ id: user._id, role: user.role })
  user.refreshToken = hashToken(refreshToken)
  await user.save({
    validateBeforeSave: false // by default = true, whenever '.save()' is called it runs all the validations again before saving the data. 
  })

  const userObj = user.toObject()
  delete user.refreshToken
  delete user.password

  return {
    user: userObj,
    accessToken,
    refreshToken
  }

}

const refresh = async (token) => {
  // 'token' here = refreshToken
  if (!token) {
    throw ApiError.unauthorized("Refresh token is missing")
  }
  const decoded = verifyRefreshToken(token)
  if (!decoded) {
    throw ApiError.serverError("Error while verifying refresh token")
  }
  const user = await User.findById(decoded?.id).select('+refreshToken')
  if (!user) {
    throw ApiError.notFound("User not found")
  }

  if (user.refreshToken !== hashToken(token)) {
    throw ApiError.unauthorized('Invalid Refresh Token')
  }

  const accessToken = generateAccessToken({ id: user._id, role: user.role })
  const refreshToken = generateRefreshToken({ id: user._id, role: user.role })
  user.refreshToken = hashToken(refreshToken)
  await user.save({
    validateBeforeSave: false
  })

  const userObj = user.toObject()
  delete user.refreshToken
  delete user.password

  return {
    accessToken,
    refreshToken,
    user: userObj
  }
}

// const logout = async (userId) => {
//    await User.findByIdAndUpdate(userId, { refreshToken: null }, { new: true })
// }

export {
  register,
  login,
  refresh,
}