'use strict';

var inherits = require('inherits');

var Modeler = require('bpmn-js/lib/Modeler');

function PriorityAwareModeler(options) {
  Modeler.call(this, options);
}

inherits(PriorityAwareModeler, Modeler);

module.exports = PriorityAwareModeler;


// make priorities module available with modeler

var prioritiesModule = require('./priorities');

PriorityAwareModeler.prototype._modules =
  PriorityAwareModeler.prototype._modules.concat([ prioritiesModule ]);