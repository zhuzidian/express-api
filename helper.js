function checkPermission(req, res, next) {
  console.log("checkPermission");
  console.log("req", req.baseUrl);
  console.log("req.route", req.route);

  const fullpath = req.baseUrl + req.route.path;
  console.log("fullpath", fullpath);
  next()
}

module.exports = {
  checkPermission,
}