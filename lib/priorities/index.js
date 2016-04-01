module.exports = {
  __init__: [
    'priorityOverlay',
    'resizeTaskRules',
    'colorRenderer'
  ],
  priorityOverlay: [ 'type', require('./PriorityOverlay') ],
  colorRenderer: [ 'type', require('./ColorRenderer') ],
  resizeTaskRules: [ 'type', require('./ResizeTaskRules') ]
};