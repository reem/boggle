var dictionary = require('./dictionary.js')();
var Set = require('./set.js').Set;

// Create a new Boggle proble.
//
// Args:
//   board: [[char | "qu"]] - the input boggle board
var Boggle = function (board) {
  this.board = board;
};

// Solve this Boggle problem.
//
//  Returns: [String] - all possible words on this board
Boggle.prototype.solve = function () {

};

module.exports.Boggle = Boggle;

// Solve this boggle board directly.
module.exports.boggle = function (board) {
  return new Boggle(board).solve();
};

