var assert = require('assert');

var callOnce = require('../..');

describe('callOnce', function () {
  describe('does not call multiple times', function () {
    var args = [];

    function addArguments() {
      args.push(Array.prototype.slice.call(arguments, 0));
    }

    it('0 arguments', function () {
      args = [];
      var callback1 = callOnce(addArguments);
      assert.ok(!args.length);
      callback1();
      assert.equal(args.length, 1);
      callback1();
      assert.equal(args.length, 1);
      assert.deepEqual(args[0], []);
    });

    it('1 argument', function () {
      args = [];
      var callback1 = callOnce(addArguments);
      assert.ok(!args.length);
      callback1(1);
      assert.equal(args.length, 1);
      callback1(101);
      assert.equal(args.length, 1);
      assert.deepEqual(args[0], [1]);
    });

    it('2 arguments', function () {
      args = [];
      var callback1 = callOnce(addArguments);
      assert.ok(!args.length);
      callback1(1, 2);
      assert.equal(args.length, 1);
      callback1(101, 102);
      assert.equal(args.length, 1);
      assert.deepEqual(args[0], [1, 2]);
    });

    it('3 arguments', function () {
      args = [];
      var callback1 = callOnce(addArguments);
      assert.ok(!args.length);
      callback1(1, 2, 3);
      assert.equal(args.length, 1);
      callback1(101, 102, 103);
      assert.equal(args.length, 1);
      assert.deepEqual(args[0], [1, 2, 3]);
    });

    it('4 arguments', function () {
      args = [];
      var callback1 = callOnce(addArguments);
      assert.ok(!args.length);
      callback1(1, 2, 3, 4);
      assert.equal(args.length, 1);
      callback1(101, 102, 103, 104);
      assert.equal(args.length, 1);
      assert.deepEqual(args[0], [1, 2, 3, 4]);
    });

    it('5 arguments', function () {
      args = [];
      var callback1 = callOnce(addArguments);
      assert.ok(!args.length);
      callback1(1, 2, 3, 4, 5);
      assert.equal(args.length, 1);
      callback1(101, 102, 103, 104, 105);
      assert.equal(args.length, 1);
      assert.deepEqual(args[0], [1, 2, 3, 4, 5]);
    });

    it('6 arguments', function () {
      args = [];
      var callback1 = callOnce(addArguments);
      assert.ok(!args.length);
      callback1(1, 2, 3, 4, 5, 6);
      assert.equal(args.length, 1);
      callback1(101, 102, 103, 104, 105, 106);
      assert.equal(args.length, 1);
      assert.deepEqual(args[0], [1, 2, 3, 4, 5, 6]);
    });

    it('7 arguments', function () {
      args = [];
      var callback1 = callOnce(addArguments);
      assert.ok(!args.length);
      callback1(1, 2, 3, 4, 5, 6, 7);
      assert.equal(args.length, 1);
      callback1(101, 102, 103, 104, 105, 106, 107);
      assert.equal(args.length, 1);
      assert.deepEqual(args[0], [1, 2, 3, 4, 5, 6, 7]);
    });
  });
});
