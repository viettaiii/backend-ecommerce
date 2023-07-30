const { StatusCodes, CustomeError } = require("./custom-error");

class ForbiddenError extends CustomeError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}
module.exports = ForbiddenError;
