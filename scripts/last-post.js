const { open, getLastFile } = require("./utils");

try {
  open(getLastFile());
} catch (err) {
  console.error(err);
}
