"use strict";
class Logger {
    printDate(date) {
        this.log(date.toString());
    }
}
class RealLogger extends Logger {
    log(message) {
        console.log(message);
    }
    logWithDate(message) {
        this.printDate(new Date());
        this.log(message);
    }
}
const l50 = new RealLogger;
l50.logWithDate('hello world');
new RealLogger().log('one more');
new RealLogger().logWithDate('any more');
