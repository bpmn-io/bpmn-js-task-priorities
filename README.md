# Visual Task Priorities for bpmn-js

Extend [bpmn-js](https://github.com/bpmn-io/bpmn-js) to define tasks priorities while modeling.

![Task priorities in bpmn-js](https://github.com/bpmn-io/task-priorities/blob/master/resources/screencast.gif)


## Features

* [Color elements](https://github.com/bpmn-io/task-priorities/blob/master/lib/priorities/ColorRenderer.js) based on `tp:color` extension attribute
* [Compute and display priorities](https://github.com/bpmn-io/task-priorities/blob/master/lib/priorities/PriorityOverlay.js)  based on color and task size
* Serializes the computed priority via the `tp:priority` for usage during process execution


## Usage

Fetch it as a dependency via [npm](https://www.npmjs.com/package/bpmn-js-task-priorities):

```plain
npm install bpmn-js-task-priorities
```

Use the modeler as part of your application:

```javascript
var PriorityAwareModeler = require('bpmn-js-task-priorities/lib/PriorityAwareModeler');

var modeler = new PriorityAwareModeler();

modeler.importXML(annotatedBpmnXml, ...);
```

Or use the provided [extension module](https://github.com/bpmn-io/bpmn-js-task-priorities/tree/master/lib/priorities) with [bpmn-js](https://github.com/bpmn-io/bpmn-js):

```javascript
var Modeler = require('bpmn-js/lib/Modeler');

var prioritiesModule = require('bpmn-js-task-priorities/lib/priorities');

var modeler = new Modeler({
  additionalModules: [
    prioritiesModule
  ]
});
```

Specify tasks colors in XML and read the serialized `tp:color` and `tp:priority` extension attributes:

```xml
<definitions ... xmlns:tp="http://tp">
  <process>
    <task id="Task_1" tp:color="green" />
    <task id="Task_2" tp:color="red" tp:priority="100041" />
    ...
  </process>
</definitions>
```

## Building

```
npm install
npm run test:watch
```


## License

MIT
