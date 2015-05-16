var flyd = require('flyd');

module.exports = flyd.curryN(2, function(targ, fn) {
  var s = flyd.endsOn(targ.end, flyd.stream());
  flyd.map(function(v) { targ(fn(v)); }, s);
  return s;
});
