'use strict';

var inherits = require('inherits');

var is = require('bpmn-js/lib/util/ModelUtil').is;

var getBusinessObject = require('bpmn-js/lib/util/ModelUtil').getBusinessObject;

var BpmnRenderer = require('bpmn-js/lib/draw/BpmnRenderer');


function ColorRenderer(eventBus, styles, pathMap) {

  BpmnRenderer.call(this, eventBus, styles, pathMap, 1200);


  var originalDrawShape = this.drawShape;

  this.drawShape = function(visuals, element) {

    var bo, color;

    var result = originalDrawShape.call(this, visuals, element);

    if (is(element, 'bpmn:Activity')) {
      bo = getBusinessObject(element);
      color = bo.get('tp:color');

      if (color) {
        result.attr('fill', color);
      }
    }

    return result;
  };
}

inherits(ColorRenderer, BpmnRenderer);

module.exports = ColorRenderer;