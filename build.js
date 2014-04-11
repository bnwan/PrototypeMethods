/**
 * Created by Benjamin on 11/04/2014.
 */

var b = require('browserify')(),
    fs = require('fs');

b.add('./prototype-methods.js');
b.bundle({standalone: 'prototype-methods'}, function (err, code) {
    fs.writeFileSync('prototype-methods.bundle.js', code);
});
