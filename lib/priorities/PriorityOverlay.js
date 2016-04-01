'use strict';

var domQuery = require('min-dom/lib/query'),
    domClasses = require('min-dom/lib/classes'),
    domify = require('min-dom/lib/domify');

var is = require('bpmn-js/lib/util/ModelUtil').is;

var getBusinessObject = require('bpmn-js/lib/util/ModelUtil').getBusinessObject;


function PriorityOverlay(eventBus, canvas) {

  var container = canvas._container;

  var overlay = domify(
        '<div class="tp-priorities">Priority: <span class="tp-value">-1</span></div>');

  container.appendChild(overlay);

  var defaultWidth = 100,
      defaultHeight = 80;

  var self = this;

  var reactOnHover = true;

  this.update = function(shape, dimensions) {

    var priority = -1;

    var colored = false;

    if (is(shape, 'bpmn:Activity')) {
      dimensions = dimensions || shape;

      priority =
        (dimensions.width * dimensions.height) /
        (defaultWidth * defaultHeight) * 5;

      var bo = getBusinessObject(shape);

      colored = bo.get('tp:color');

      // trim to 3 digits
      priority = Math.round(priority * 1000 * (colored ? 10 : 1));

      bo.set('tp:priority', priority);
    }

    var valueNode = domQuery('.tp-value', overlay);

    domClasses(valueNode).toggle('high', priority > 15000);

    valueNode.textContent = priority;
  };

  eventBus.on('resize.move', 500, function(event) {
    var context = event.context,
        shape = context.shape,
        newBounds = context.newBounds;

    self.update(shape, newBounds);
  });

  eventBus.on('resize.start', function() {
    reactOnHover = false;
  });

  eventBus.on('resize.cleanup', function() {
    reactOnHover = true;
  });

  eventBus.on('selection.changed', function(event) {
    self.update(event.newSelection[0]);
  });

  eventBus.on('element.hover', function(event) {
    if (reactOnHover) {
      self.update(event.element);
    }
  });
}

module.exports = PriorityOverlay;