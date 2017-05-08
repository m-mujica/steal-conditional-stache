var path = require("path");
var stealTools = require("steal-tools");

var config = {
  config: path.join(__dirname, "package.json!npm")
};

stealTools.build(config, { minify: false })
  .then(function() {
    console.log("DONE!!");
  })
  .catch(function(err) {
    console.error("Error: ", err);
  });
