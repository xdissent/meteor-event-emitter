
Tinytest.add('EventEmitter once', function (test) {
  var ee = new EventEmitter(),
    called = '';
  ee.once('test', function () {
    called += 'A';
  });
  ee.on('test', function () {
    called += 'B';
  });
  ee.emit('test');
  ee.emit('test');
  ee.emit('test');
  test.equal(called, 'ABBB');
});
