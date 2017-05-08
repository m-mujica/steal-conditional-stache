var path = require("path");
var live = require("steal-tools/lib/stream/live");

var config = {
  config: path.join(__dirname, "package.json!npm")
};

live(config, {});
