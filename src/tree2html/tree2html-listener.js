'use strict';

const LemonParserListener =
  require('../parser/Lemon/LemonParserListener').LemonParserListener;
const LemonParser = require('../parser/Lemon/LemonParser').LemonParser;

/**
 * Create Tree2HtmlListener.
 * @param {CommonTokenStream} tokens
 * @returns {Tree2HtmlListener}
 * @constructor
 * @extends LemonParserListener
 */
function Tree2HtmlListener(tokens) {
  LemonParserListener.call(this);

  this._buffer = '';
  this.html = '';
  this._tokens = tokens;
  this._newLineRegex = /\r\n|\n|\r/;

  return this;
}

Tree2HtmlListener.prototype = Object.create(LemonParserListener.prototype);
Tree2HtmlListener.prototype.constructor = Tree2HtmlListener;

/**
 * @param {FileContext} ctx
 */
Tree2HtmlListener.prototype.enterFile = function (ctx) {
  this._buffer +=
    this._textOfHiddenTokensToLeft(ctx.children[0].start.tokenIndex);
};

/**
 * @param {FileContext} ctx
 */
Tree2HtmlListener.prototype.exitFile = function (ctx) {
  const lines = this._buffer.split(this._newLineRegex);
  this.html += '<table class="grammar-view">';

  let number = 1;
  for (const line of lines) {
    this.html += `<tr data-row="${number}">` +
      `<td class="grammar-view__row-number" @click="addCommentToRow">${number++}</td>` +
      `<td class="grammar-view__code">${line}</td></tr>`;
  }

  this.html += '</table>';
};

/**
 * @param {TerminalNodeImpl} ctx
 */
Tree2HtmlListener.prototype.visitTerminal = function (ctx) {
  if (ctx.parentCtx instanceof LemonParser.LeftSideContext) {
    this._buffer += '<span class="grammar-view__ls-nonterminal" ' +
      '@click="addCommentToLsNonterminal">' +
      `${ctx.symbol.text}</span>`;
  } else if (ctx.parentCtx instanceof LemonParser.SymbolContext &&
    ctx.parentCtx.parentCtx instanceof LemonParser.RightSideContext) {
    const text = ctx.getText();

    // Terminal.
    if (text[0] === text[0].toUpperCase()) {
      this._buffer += `<span class="grammar-view__terminal" ` +
        `@click="addCommentToTerminal">${text}` +
        '</span>';
    } else { // Nonterminal.
      this._buffer += '<span class="grammar-view__rs-nonterminal" ' +
        '@click="addCommentToRsNonterminal">' +
        `${text}</span>`;
    }
  } else {
    this._buffer += ctx.symbol.text;
  }

  this._buffer += this._textOfHiddenTokensToRight(ctx.symbol.tokenIndex);
};

/**
 * @param {number} index
 * @returns {string}
 * @private
 */
Tree2HtmlListener.prototype._textOfHiddenTokensToLeft = function (index) {
  return this._tokensText(this._tokens.getHiddenTokensToLeft(index));
};

/**
 * @param {number} index
 * @returns {string}
 * @private
 */
Tree2HtmlListener.prototype._textOfHiddenTokensToRight = function (index) {
  return this._tokensText(this._tokens.getHiddenTokensToRight(index));
};

/**
 * @param {Array} tokens
 * @returns {string}
 * @private
 */
Tree2HtmlListener.prototype._tokensText = function (tokens) {
  tokens = tokens || [];
  let result = '';
  for (const token of tokens) {
    result += token.text;
  }
  return result;
};

module.exports = Tree2HtmlListener;