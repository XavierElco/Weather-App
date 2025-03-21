const express = require("express");
const apiRouter = require("../app/routes/v1/api");
const config = require("../app/config/app");
const cors = require("cors");

const startServer = () => {
  const expressApp = express();

  expressApp.listen(config.port, (err) => {
    if (err) {
      console.log(err);
      process.exit();
    }
    console.log(`服务器正在监听端口:`, config.port);
  });
  return expressApp;
};

module.exports = () => {
  const app = startServer();
  app.use(cors());
  app.use(config.api.prefix, apiRouter);
  return app;
};