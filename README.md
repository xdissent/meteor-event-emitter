event-emitter
=============

Meteor-aware EventEmitter wrapper for EventEmitter2 (client) and Node's events.EventEmitter (server)


Usage
-----

Enable the package via [Meteorite](http://oortcloud.github.io/meteorite/):

```console
$ mrt add event-emitter
```

Create an event 

```coffee
MyEventLogs = new Meteor.Collection 'my-event-logs'

ee = new EventEmitter

ee.on 'my-event', (where, data) -> MyEventLogs.insert where: where, data: log

Meteor.startup ->
  where = if Meteor.isServer then 'server' else 'client'
  ee.emit 'my-event', where, 'Meteor started up'
```