
const { isLoggedIn } = require('../middleware')

module.exports = app => {

  app.use("/api", require("./auth.routes"));
  app.use("/api/people", require("./people.routes"));
  app.use("/api/request", require("./request.routes"));
  app.use("/api/conversation", require("./conversation.routes"));
  app.use("/api/upload", require("./uploads.routes"));
  app.use("/api/messages", require("./messages.routes"));
  app.use("/api/dates", require("./dates.routes"));

}


