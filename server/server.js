const express = require("express");
const Rollbar = require("rollbar");
const path = require("path");

const rollbar = new Rollbar({
  accessToken: '7bf76701ac7844259ff76da8077e953a',
  captureUncaught: true,
  captureUnhandledRejections: true
});

rollbar.log("Hello World!");

const app = express();
app.use(rollbar.errorHandler())

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
    rollbar.info("html file served successfully");
    rollbar.error("this endpoint doesn't exist");
    rollbar.critical("Crash while trying to reach endpoint")
    rollbar.warning("Endpoint doesnt exist")
});

app.get("/endpoint", (req, res) => {
    functionDoesNotExist();
});

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server started listening on ${port}`)
});