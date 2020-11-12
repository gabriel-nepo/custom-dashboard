const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth.json");

module.exports = {
  testTolken(authHeader) {
    if (!authHeader) {
      return false;
    }
    const parts = authHeader.split(" ");

    if (parts.length !== 2) {
      return false;
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
      return false;
    }

    const id = jwt.verify(token, authConfig.secret, (err, decoded) => {
      if (err) {
        return false;
      }

      return decoded.id;
    });

    return id;
  },
};