//V0.1

//Logging object, this is used to log informaiton at different levels to the console window on the client side and the
//console window n the server side.

var Logger = require("mrp-logger");

Lib = {};
Lib.test = function(){
    console.log('sdfsd');
    var log = new Logger('sdf',Logger.level.trace);
    log.trace('test');
}

module.exports = Lib;