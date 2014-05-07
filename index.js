var fs = require('fs');

module.exports = walk;

function walk (dir, done, results) {
  results = results || {};
  fs.readdir(dir, function (err, list) {
    if (err) {
      return done(err);
    }
    var pending = list.length;
    if (!pending) {
      return done(null, results); 
    }
    list.forEach(function (file) {
      var filepath = dir + '/' + file;
      fs.stat(filepath, function (err, stat) {
        if (err) {
          return done(err);
        } 
        if (stat.isDirectory()) {
          results[file] = {};
          walk(filepath, function (err, res) {
            if (err) {
              return done(err);
            }
            pending -= 1;
            if(!pending) {
              done(null, results); 
            }
          }, results[file]);
        } else {
          fs.readFile(filepath, function (err, content) {
            if (err) {
              return done(err);
            }
            results[file] = content.toString();
            pending -= 1;
            if (!pending) {
              done(null, results); 
            }
          });
        }
      });
    });
  });
}
