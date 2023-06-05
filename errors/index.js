const { StatusCodes, CustomeError } = require("./custom-error");
const NotFoundError = require("./notfound-error");
const UnauthorizedError = require("./unauthorized-error");
const BadRequestError = require("./bad-request-error");
const ForbiddenError = require("./forbidden-error");

module.exports = {
  StatusCodes,
  CustomeError,
  NotFoundError,
  UnauthorizedError,
  BadRequestError,
  ForbiddenError,
};
