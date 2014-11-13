var Trie = function () {
  this.root = new TrieNode("", false);
};

Trie.prototype.is_prefix = function (word) {
  return this.root.is_prefix(word);
};

Trie.prototype.contains = function (word) {
  return this.root.contains(word);
};

Trie.prototype.insert = function (word) {
  return this.root.insert(word);
};

var TrieNode = function (chr, terminal) {
  this.chr = chr;
  this.terminal = terminal;

  // char => TrieNode
  this.children = {};
};

TrieNode.prototype.is_prefix = function (word) {
  var node = this._find(word);
  return !!node;
};

TrieNode.prototype.contains = function (word) {
  var node = this._find(word);
  return !!node && node.terminal;
};

TrieNode.prototype._find = function (word, i) {
  if (i === undefined) { i = 0; }

  if (i === word.length) {
    return this;
  }

  if (this.children[word[i]]) {
    return this.children[word[i]].is_prefix(word, i + 1);
  }
}

TrieNode.prototype.insert = function (word, i) {
  if (i === undefined) { i = 0; }

  if (i === word.length) {
    return;
  }

  // When the child is already present, just continue from it.
  if (this.children[word[i]]) {
    this.children[word[i]].insert(word, i + 1);
  } else {
    var is_terminal = i === word.length - 1;
    this.children[word[i]] = new TrieNode(word[i], is_terminal);

    if (!is_terminal) {
      this.children[word[i]].insert(word, i + 1);
    }
  }
};

module.exports.Trie = Trie;

