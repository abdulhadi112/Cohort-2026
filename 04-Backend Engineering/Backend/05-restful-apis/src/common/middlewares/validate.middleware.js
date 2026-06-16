import ApiError from "../../../utils/api-error.js"

const validate = (DTOClass) => {
  return (req, res, next) => {
    const { errors, value } = DTOClass.validateSchema(req.body)
    if (errors) {
      throw ApiError.badRequest(errors.join(';'))
    }

    req.body = value
    next()
  }
}

export default validate
/*
How will we use this validate method

// A user login route
// userLoginDTO is a class which modifies the schema according what detail we want from the user for login. Validate method will run validation to check for errors, if any an ApiError will be thrown
app.post('/login', validate(userLoginDTO), loginUser)
*/