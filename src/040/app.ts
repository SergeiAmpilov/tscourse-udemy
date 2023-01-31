interface ILogger40 {
  log(...args: any[]): void;
  error(...args: any[]): void;
}


class Logger40 implements ILogger40 {

  log(...args: any[]): void {
    throw new Error("Method not implemented.");
  }

  async error(...args: any[]): Promise<void> {
    throw new Error("Method not implemented.");
  }

}


interface IPayable40 {
  price?: number;
  pay(payId: number): void;
}

interface IDeletable40 {
  delete(): void;
}


class User40 implements IPayable40, IDeletable40 {
  delete(): void {
    throw new Error("Method not implemented.");
  }
  price?: number | undefined;
  pay(payId: number): void {
    throw new Error("Method not implemented.");
  }
  
}


new User40().delete();