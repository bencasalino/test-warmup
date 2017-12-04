const assert = require("assert");
const code = require("../app");

describe("#arrLengthDoubled", function() {
  it("the function returns the doubled length of an array.", function() {
    assert.equal(code.arrLengthDoubled["these", "are", "words", "in", "the", "array"]), 12
  })
})
