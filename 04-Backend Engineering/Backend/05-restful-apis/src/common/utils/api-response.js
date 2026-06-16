// standardizing response format using class
class ApiResponse {

  static ok(response, message, data = null) {
    return response
      .status(200)
      .json({
        success: true,
        message,
        data,
        timestamp: Date.toISOString()
      })
  }

  static created(response, message, data = null) {
    return response
      .status(201)
      .json({
        success: true,
        message,
        data
      })
  }
  static noContent(response) {
    return response.sendStatus(204)
  }
}

export default ApiResponse