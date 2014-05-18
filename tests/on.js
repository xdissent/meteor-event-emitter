
Tinytest.add('EventEmitter on', function (test) {
  var ee = new EventEmitter(),
    called = '',
    fn1 = function () { called += 'A'; },
    fn2 = function () { called += 'B'; };
  
  ee.on('test1', fn1);
  ee.on('test1', fn2);
  ee.on('test2', fn2);

  var listeners = ee.listeners('test1');
  test.equal(listeners.length, 2);
  test.equal(true, listeners[0].listener === fn1);
  test.equal(true, listeners[1].listener === fn2);
  listeners = ee.listeners('test2');
  test.equal(listeners.length, 1);
  test.equal(true, listeners[0].listener === fn2);

  ee.emit('test1');
  ee.emit('test1');
  ee.emit('test2');
  ee.emit('test2');

  test.equal(called, 'ABABBB');
});
