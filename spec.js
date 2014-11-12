var boggle = require('./boggle.js').boggle;
var expect = require('chai').expect;

describe("boggle", function () {
  it("should solve a simple board", function () {
    expect(boggle([
      ['e', 'e', 'l'],
      ['m', 'l', 'b'],
      ['t', 'i', 'e'],
    ])).to.have.members([
      // Horizontal
      'tie',
      'eel',

      // Vertical
      'ell',

      // Bent
      'lie',

      // Diagonal
      'elm',
      'bile',
      'melt'
    ])
  });
});

