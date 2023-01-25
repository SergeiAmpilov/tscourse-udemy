abstract class Logger {
  abstract log(message: string): void;

  printDate(date: Date): void {
    this.log(date.toString());
  }
}


class RealLogger extends Logger {
  log(message: string): void {
    console.log(message);
  }

  logWithDate(message: string): void {
    this.printDate(new Date());
    this.log(message);
  }  
}



const l50 = new RealLogger;
l50.logWithDate('hello world');
new RealLogger().log('one more');
new RealLogger().logWithDate('any more');