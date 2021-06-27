const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

const constants = {};

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach(file => {
    const constant = require(path.join(__dirname, file));

    constants[constant.name] = require(path.join(__dirname, file));
  });

module.exports = {
  ...constants
};
