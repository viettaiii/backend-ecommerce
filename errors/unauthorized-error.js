const { StatusCodes, CustomeError } = require("./custom-error");

class UnauthorizedError extends CustomeError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}
module.exports = UnauthorizedError;
