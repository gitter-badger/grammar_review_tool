// Generated from D:/Files/Projects/grammar_review_tool/src/parser\Lemon.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by LemonParser.

function LemonVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

LemonVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
LemonVisitor.prototype.constructor = LemonVisitor;

// Visit a parse tree produced by LemonParser#file.
LemonVisitor.prototype.visitFile = function(ctx) {
};


// Visit a parse tree produced by LemonParser#grammarRule.
LemonVisitor.prototype.visitGrammarRule = function(ctx) {
};


// Visit a parse tree produced by LemonParser#leftSide.
LemonVisitor.prototype.visitLeftSide = function(ctx) {
};


// Visit a parse tree produced by LemonParser#rightSide.
LemonVisitor.prototype.visitRightSide = function(ctx) {
};


// Visit a parse tree produced by LemonParser#precedence.
LemonVisitor.prototype.visitPrecedence = function(ctx) {
};


// Visit a parse tree produced by LemonParser#symbol.
LemonVisitor.prototype.visitSymbol = function(ctx) {
};


// Visit a parse tree produced by LemonParser#param.
LemonVisitor.prototype.visitParam = function(ctx) {
};


// Visit a parse tree produced by LemonParser#directive.
LemonVisitor.prototype.visitDirective = function(ctx) {
};



exports.LemonVisitor = LemonVisitor;