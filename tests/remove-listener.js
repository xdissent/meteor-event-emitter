
Tinytest.add('EventEmitter removeListener', function (test) {
  var ee = new EventEmitter(),
    fn1 = function () {},
    fn2 = function () {};
  
  ee.on('test1', fn1);
  ee.on('test1', fn2);
  ee.on('test2', fn2);

  var listeners = ee.listeners('test1');
  test.equal(listeners.length, 2);
  test.equal(listeners[0].listener === fn1, true);
  test.equal(listeners[1].listener === fn2, true);
  listeners = ee.listeners('test2');
  test.equal(listeners.length, 1);
  test.equal(listeners[0].listener === fn2, true);

  ee.removeListener('test1', function () {});
  test.equal(ee.listeners('test1').length, 2);

  ee.removeListener('test1', fn2);

  listeners = ee.listeners('test1');
  test.equal(listeners.length, 1);
  test.equal(listeners[0].listener === fn1, true);
  listeners = ee.listeners('test2');
  test.equal(listeners.length, 1);
  test.equal(listeners[0].listener === fn2, true);

  ee.removeListener('test1', ee.listeners('test1')[0]);
  test.equal(ee.listeners('test1').length, 0);

  ee.removeListener('test2', fn2);
  test.equal(ee.listeners('test2').length, 0);
});
