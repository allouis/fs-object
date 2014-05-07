var fsObj = require('../index.js');

describe('walk', function () {

  it('should return either an error or an object', function (done) {
    
    fsObj(process.cwd() + '/err', function (err, obj) {
      if (err && obj) {
      
      } 
    }); 

  });

});
