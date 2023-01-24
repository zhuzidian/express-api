const router = require("express").Router();
const { checkPermission } = require("./helper");

router.get("/", checkPermission, async (req, res) => {
  const fullpath = req.baseUrl + req.route.path;
  res.send(fullpath);
});

router.get("/:id", checkPermission, async (req, res) => {
  const fullpath = req.baseUrl + req.route.path;
  res.send(fullpath);
});

module.exports = router;
