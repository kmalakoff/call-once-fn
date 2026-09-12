import assert from 'assert';
import once from 'call-once-fn';

describe('exports .mjs', () => {
  it('default', () => {
    assert.equal(typeof once, 'function');
  });
});
