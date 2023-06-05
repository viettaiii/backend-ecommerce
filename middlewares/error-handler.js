const { StatusCodes } = require("../errors");
const errorHandler = (err, req, res, next) => {
  console.log(err);
  const defaultErr = {
    message: err.message || "Wrong something ,please try again",
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
  };
  
  res.status(defaultErr.statusCode).json({ message: defaultErr.message });
};

module.exports = errorHandler;
