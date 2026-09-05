const assert = require('assert');
const once = require('call-once-fn');

describe('exports .cjs', () => {
  it('default', () => {
    assert.equal(typeof once, 'function');
  });
});
