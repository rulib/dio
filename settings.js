var fs = require('fs');

exports.options = {
  key: fs.readFileSync('../https/demil_io.key'),
  cert: fs.readFileSync('../https/demil_io.cert'),
  ca: fs.readFileSync('../https/demil_io.ca')
};

exports.ports = {
  http: "80",
  https: "443"
};