const { StatusCodes, CustomeError } = require("./custom-error");

class BadRequestError extends CustomeError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}
module.exports = BadRequestError;
