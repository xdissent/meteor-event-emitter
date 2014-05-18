
Package.describe({
  summary: "Meteor-aware EventEmitter wrapper for EventEmitter2 (client) and Node's events.EventEmitter (server)"
});

Package.on_use(function (api, where) {
  api.use('coffeescript');
  api.use('bower');
  api.add_files('smart.json');
  api.add_files('src/index.coffee');
  api.export('EventEmitter');
});

Package.on_test(function (api) {
  api.use('event-emitter');
  api.use('tinytest');
  api.add_files('tests/on.js');
  api.add_files('tests/once.js');
  api.add_files('tests/remove-listener.js');
  api.add_files('tests/remove-all-listeners.js');
});
