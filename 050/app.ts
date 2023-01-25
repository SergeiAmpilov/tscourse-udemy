abstract class Logger {
  abstract log(message: string): void;

  printDate(): void {
    this.log(`${new Date()}`);
  }
}


class RealLogger extends Logger {
  log(message: string): void {
    console.log(message);
  }

  logWithDate(message: string): void {
    this.printDate();
    this.log(message);
  }  
}



const l50 = new RealLogger;
l50.logWithDate('hello world');