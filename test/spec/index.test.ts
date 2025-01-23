import assert from 'assert';

// @ts-ignore
import once from 'call-once-fn';

describe('once', () => {
  describe('does not call multiple times', () => {
    let args = [];

    function addArguments() {
      // biome-ignore lint/style/noArguments: <explanation>
      args.push(Array.prototype.slice.call(arguments, 0));
    }

    it('0 arguments', () => {
      args = [];
      const callback1 = once(addArguments);
      assert.ok(!args.length);
      callback1();
      assert.equal(args.length, 1);
      callback1();
      assert.equal(args.length, 1);
      assert.deepEqual(args[0], []);
    });

    it('1 argument', () => {
      args = [];
      const callback1 = once(addArguments);
      assert.ok(!args.length);
      callback1(1);
      assert.equal(args.length, 1);
      callback1(101);
      assert.equal(args.length, 1);
      assert.deepEqual(args[0], [1]);
    });

    it('2 arguments', () => {
      args = [];
      const callback1 = once(addArguments);
      assert.ok(!args.length);
      callback1(1, 2);
      assert.equal(args.length, 1);
      callback1(101, 102);
      assert.equal(args.length, 1);
      assert.deepEqual(args[0], [1, 2]);
    });

    it('3 arguments', () => {
      args = [];
      const callback1 = once(addArguments);
      assert.ok(!args.length);
      callback1(1, 2, 3);
      assert.equal(args.length, 1);
      callback1(101, 102, 103);
      assert.equal(args.length, 1);
      assert.deepEqual(args[0], [1, 2, 3]);
    });

    it('4 arguments', () => {
      args = [];
      const callback1 = once(addArguments);
      assert.ok(!args.length);
      callback1(1, 2, 3, 4);
      assert.equal(args.length, 1);
      callback1(101, 102, 103, 104);
      assert.equal(args.length, 1);
      assert.deepEqual(args[0], [1, 2, 3, 4]);
    });

    it('5 arguments', () => {
      args = [];
      const callback1 = once(addArguments);
      assert.ok(!args.length);
      callback1(1, 2, 3, 4, 5);
      assert.equal(args.length, 1);
      callback1(101, 102, 103, 104, 105);
      assert.equal(args.length, 1);
      assert.deepEqual(args[0], [1, 2, 3, 4, 5]);
    });

    it('6 arguments', () => {
      args = [];
      const callback1 = once(addArguments);
      assert.ok(!args.length);
      callback1(1, 2, 3, 4, 5, 6);
      assert.equal(args.length, 1);
      callback1(101, 102, 103, 104, 105, 106);
      assert.equal(args.length, 1);
      assert.deepEqual(args[0], [1, 2, 3, 4, 5, 6]);
    });

    it('7 arguments', () => {
      args = [];
      const callback1 = once(addArguments);
      assert.ok(!args.length);
      callback1(1, 2, 3, 4, 5, 6, 7);
      assert.equal(args.length, 1);
      callback1(101, 102, 103, 104, 105, 106, 107);
      assert.equal(args.length, 1);
      assert.deepEqual(args[0], [1, 2, 3, 4, 5, 6, 7]);
    });
  });
});
