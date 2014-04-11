/**
 * Created by Benjamin on 11/04/2014.
 */

var bindPrototypeMethods = function bindPrototypeMethods(self, api){
    for(var key in api){
        self.prototype[key] = api[key];
    }
};

module.exports = bindPrototypeMethods;
