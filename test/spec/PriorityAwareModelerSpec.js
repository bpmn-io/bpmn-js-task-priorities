'use strict';

var TestHelper = require('../TestHelper');

var TestContainer = require('mocha-test-container-support');

var PriorityAwareModeler = require('lib/PriorityAwareModeler');


describe('PriorityAwareModeler', function() {

  var diagramXML = require('./diagram.bpmn');

  var container;

  beforeEach(function() {
    container = TestContainer.get(this);
  });


  it('should bootstrap', function(done) {
    var modeler = new PriorityAwareModeler({ container: container });

    modeler.importXML(diagramXML, done);
  });

});