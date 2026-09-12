import assert from 'assert';
import once from 'call-once-fn';

describe('exports .ts', () => {
  it('default', () => {
    assert.equal(typeof once, 'function');
  });
});
