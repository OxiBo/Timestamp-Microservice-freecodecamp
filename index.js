// https://boggy-surprise.glitch.me/

const express = require("express"),
  cors = require("cors"),
  app = express();
helpers = require("./utils/helperFuncs");
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/timestamp/:date_string?", (req, res) => {
  const dateString = req.params.date_string;
  res.send(helpers.getDateAndTime(dateString));
});

const PORT = process.env.PORT || 3002;
// listen for requests
app.listen(PORT, () => {
  console.log("Your app is listening on port " + PORT);
});
