var assert = require("assert");
var butils = require("../src/binary-utils");

describe('binary-utils', function(){
  describe('#foo()', function(){
    it('should return "bar"', function(){
      assert.equal("bar", butils.foo());
    })
  })
})