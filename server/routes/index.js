
module.exports = app => {
  
  app.use("/api", require("./auth.routes"));
  app.use("/api/users", require("./users.routes"));
}