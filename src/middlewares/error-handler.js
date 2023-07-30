const { StatusCodes } = require("../errors");
const errorHandler = (err, req, res, next) => {
  const defaultErr = {
    message: err.message || "Wrong something ,please try again",
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
  };
  if (err.name === "SequelizeForeignKeyConstraintError") {
    defaultErr.statusCode = StatusCodes.BAD_REQUEST;
    defaultErr.message = `${
      err.original?.sqlMessage.split(":")[0]
    } is not a valid foreign key constraint table '${
      err?.table
    }' has not value ${err?.value}`;
  }
  if (err.name === "SequelizeValidationError") {
    defaultErr.statusCode = StatusCodes.BAD_REQUEST;
    defaultErr.message =
      err.errors.map(
        (itemErr) =>
          `[${itemErr.path} of table ${
            itemErr?.instance.toString().split(":")[1]
          } `
      ) + " cannot be null";
  }
  res.status(defaultErr.statusCode).json({
    error: {
      message: defaultErr.message,
      type: err.name,
    },
  });
};

module.exports = errorHandler;
