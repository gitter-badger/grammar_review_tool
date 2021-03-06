'use strict'

import tree from 'antlr4/tree/index'
import FinderListener from './finder-listener'
import {LemonParser} from '../Parser/Lemon/LemonParser'

/**
 * Class to find symbols in tree.
 */
class Finder {
  /**
   * Create a finder.
   * @param {FileContext} tree
   */
  constructor(tree) {
    this.tree = tree
  }

  /**
   * Find rules, where certain nonterminal on the left.
   * @param {string} nonterminal
   * @returns {Array}
   */
  findRulesWhereOnTheLeft(nonterminal) {
    const finder = new FinderListener({
      nonterminalToFindOnTheLeftSide: nonterminal,
    })
    tree.ParseTreeWalker.DEFAULT.walk(finder, this.tree)
    return finder.nonterminalsOnTheLeftSide
  }

  /**
   * Find rules, which contain certain symbol.
   * @param {string} symbol
   * @returns {Array}
   */
  findRulesWhichContains(symbol) {
    const finder = new FinderListener({symbolToFind: symbol})
    tree.ParseTreeWalker.DEFAULT.walk(finder, this.tree)
    return finder.rulesWhichContainsSymbol
  }

  /**
   * Find rules, which have the same right side.
   * @param {string} rule
   * @returns {Array}
   */
  findRulesWithTheSameRightSide(rule) {
    const rules = this.findRulesWhereOnTheLeft(rule)
    const ruleToCompare = {
      rule: rules[0],
      symbols: [],
    }

    for (const child of ruleToCompare.rule.parentCtx.rightSide().children) {
      if (child instanceof LemonParser.SymbolContext) {
        ruleToCompare.symbols.push(child.children[0].getText())
      }
    }

    const finder = new FinderListener({ruleToCompare})
    tree.ParseTreeWalker.DEFAULT.walk(finder, this.tree)

    return finder.rulesWithTheSameRightSides
  }
}

export default Finder
