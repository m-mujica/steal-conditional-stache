// random int between 0 and 1.
var randomInt = Math.floor(Math.random() * 2);
var platforms = ["windows", "macos"];

module.exports = platforms[randomInt];
