const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log('\n');
  console.log(method, url, time, '\n');
  next();
};

module.exports = logger;