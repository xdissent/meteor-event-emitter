
Base = if Meteor.isServer
  Npm.require('events').EventEmitter
else
  EventEmitter2


class EventEmitter extends Base

  addListener: (evt, listener) ->
    bound = Meteor.bindEnvironment listener, null, this
    bound.listener = listener
    super evt, bound

  on: (evt, listener) -> @addListener evt, listener
