"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return onceFn;
    }
});
function onceFn(callback) {
    var called = false;
    return function onceWrapper(arg1, arg2, arg3, arg4, arg5, arg6) {
        if (called) return;
        called = true;
        // biome-ignore lint/style/noArguments: <explanation>
        switch(arguments.length){
            case 1:
                return callback(arg1);
            case 2:
                return callback(arg1, arg2);
            case 3:
                return callback(arg1, arg2, arg3);
            case 4:
                return callback(arg1, arg2, arg3, arg4);
            case 5:
                return callback(arg1, arg2, arg3, arg4, arg5);
            case 6:
                return callback(arg1, arg2, arg3, arg4, arg5, arg6);
            default:
                // biome-ignore lint/style/noArguments: <explanation>
                return callback.apply(null, arguments);
        }
    };
}
/* CJS INTEROP */ if (exports.__esModule && exports.default) { Object.defineProperty(exports.default, '__esModule', { value: true }); for (var key in exports) exports.default[key] = exports[key]; module.exports = exports.default; }