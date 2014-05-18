
MyEventLogs = new Meteor.Collection('my-event-logs');

var ee = new EventEmitter;

ee.on('my-event', function (where, msg) {
  MyEventLogs.insert({where: where, msg: msg});
});

Meteor.startup(function () {
  var where = Meteor.isServer ? 'server' : 'client';
  ee.emit('my-event', where, 'Meteor started up');
});


if (Meteor.isClient) {
  Template.my_event_logs.logs = function () {
    return MyEventLogs.find();
  };

  Template.my_event_logs.events = {
    'click button': function (evt) {
      ee.emit('my-event', 'client', $('#msg').val());
      $('#msg').val(null);
    }
  };
}