const responseHelper = require('../helpers/response.error.helper');

const requestGetUser = async (req, res) => {
  try {
    const response = {ok : 'ok'};
    return res.send(response);
  } catch (err) {
    return responseHelper.send(res, err);
  }
}

module.exports = {
  requestGetUser
}