
Tinytest.add('EventEmitter removeAllListeners', function (test) {
  var ee = new EventEmitter(),
    fn1 = function () {},
    fn2 = function () {};
  
  ee.on('test1', fn1);
  ee.on('test1', fn2);
  ee.once('test1', fn1);
  ee.once('test1', fn2);
  ee.on('test2', fn1);
  ee.on('test2', fn2);
  ee.once('test2', fn1);
  ee.once('test2', fn2);

  test.equal(ee.listeners('test1').length, 4);
  test.equal(ee.listeners('test2').length, 4);

  ee.removeAllListeners('test1');
  test.equal(ee.listeners('test1').length, 0);
  test.equal(ee.listeners('test2').length, 4);

  ee.removeAllListeners();
  test.equal(ee.listeners('test1').length, 0);
  test.equal(ee.listeners('test2').length, 0);
});
