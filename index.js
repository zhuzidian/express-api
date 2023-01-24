const express = require("express");
const app = express();
const port = 3000;

const apiRouter = express.Router();
apiRouter.use("/user", require("./user.router.js"));

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
