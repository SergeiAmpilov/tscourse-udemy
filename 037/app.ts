enum PaymentStatus37 {
  Hold = 'hold',
  Process = 'process',
  Reverse = 'reverse',
}


class Payment37 {
  id: number;
  status: PaymentStatus37 = PaymentStatus37.Hold;;
  createdAt: Date  = new Date();;
  UpdatedAt: Date;

  constructor(id: number) {
    this.id = id;
  }

  getPaymentLifeTime(): number {
    return new Date().getTime() - this.createdAt.getTime();
  }

  unholdPayment(): void {
    if (this.status === PaymentStatus37.Process) {
      throw new Error('payment allready processed')
    }

    this.status = PaymentStatus37.Reverse;
    this.UpdatedAt = new Date();
  }
}

const p37 = new Payment37(1);
console.log(p37);
console.log(p37.getPaymentLifeTime());
p37.unholdPayment();
console.log(p37);

