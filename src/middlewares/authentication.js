const { UnauthorizedError, ForbiddenError } = require("../errors");
const { isTokenValid } = require("../utils/jwt");
const authenticateUser = (req, res, next) => {
  const token = req.cookies?.accessToken;

  if (!token) throw new UnauthorizedError("Token is not valid");
  try {
    const { data } = isTokenValid(token);
    req.userInfo = data;
    next();
  } catch (error) {
    console.log(error);
  }
};

const authenticatePermission = (...roles) => {
  return (req, res, next) => {
    if (!req.userInfo) throw new UnauthorizedError("Unauthorized");
    if (!roles.includes(req.userInfo.role))
      throw new ForbiddenError("Permission denied");
    next();
  };
};
module.exports = {
  authenticateUser,
  authenticatePermission,
};

