class ApiError extends Error {
  constructor(statusCode, message) {
    super(message) // calls the constructor of the parent class (in this case its Error class)
    this.statusCode = statusCode
    this.message = message
    this.isOperational = true
    Error.captureStackTrace(this, this.constructor)
  }

  static badRequest(message = "Bad Request") {
    return new ApiError(400, message)
  }
  static unauthorized(message = "Unauthorized") {
    return new ApiError(401, message)
  }
  static forbidden(message = "Foribdden") {
    return new ApiError(403, message)
  }
  static notFound(message = "Not Found") {
    return new ApiError(404, message)
  }
  static conflict(message = "Conflict") {
    return new ApiError(409, message)
  }
  static serverError(message = "Internal Server Error") {
    return new ApiError(500, message)
  }
}

export default ApiError