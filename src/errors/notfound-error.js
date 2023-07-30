const { StatusCodes, CustomeError } = require("./custom-error");

class NotFoundError extends CustomeError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}
module.exports = NotFoundError;
