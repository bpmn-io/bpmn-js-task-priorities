'use strict';

var RuleProvider = require('diagram-js/lib/features/rules/RuleProvider');

var is = require('bpmn-js/lib/util/ModelUtil').is;

var inherits = require('inherits');


function ResizeTaskRules(eventBus) {
  RuleProvider.call(this, eventBus);
}

inherits(ResizeTaskRules, RuleProvider);

module.exports = ResizeTaskRules;


ResizeTaskRules.prototype.init = function() {

  this.addRule('shape.resize', 1500, function(context) {
    if (is(context.shape, 'bpmn:Activity')) {
      return true;
    }
  });
};