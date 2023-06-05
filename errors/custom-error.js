const { StatusCodes } = require("http-status-codes");

class CustomeError extends Error {
  constructor(message) {
    super(message);
  }
}
module.exports = {
  StatusCodes,
  CustomeError,
};
