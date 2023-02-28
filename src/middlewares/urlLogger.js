/**
 * Логирует запросы в консоль
 *
 * @param {*} req - express request obj
 * @param {*} res - express response obj
 * @param {*} next - next response obj
 */
function urlLogger(req, res, next) {
  console.log(req.originalUrl);

  next();
}

module.exports = { urlLogger };
