'use strict';

var TestHelper = module.exports = require('bpmn-js/test/helper');

TestHelper.insertCSS('diagram-js.css', require('diagram-js/assets/diagram-js.css'));

TestHelper.insertCSS('bpmn-embedded.css', require('bpmn-js/assets/bpmn-font/css/bpmn-embedded.css'));

TestHelper.insertCSS('diagram-js-testing.css',
  '.test-container { height: 660px !important; }' +
  '.test-content-container { height: 640px !important; position: relative; }'
);

TestHelper.insertCSS('priorities.css', require('assets/priorities.css'))