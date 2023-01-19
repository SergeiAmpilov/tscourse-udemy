type PaymentStatus41 = 'new' | 'paid';

class Payment41 {
  id: number;
  status: PaymentStatus41 = 'new';

  constructor(id: number) {
    this.id = id;
  }

  pay(): void {
    this.status = 'paid';
  }
}

class PersistedPayment extends Payment41 {
  databaseId: number;
  paidAt: Date = new Date();

  constructor() {
    const id = Math.random();
    super(id);
  }

  save(): void {

  }

  override pay(date?: Date) {
    super.pay();
    this.paidAt = date ?? new Date();
  }

}

// new PersistedPayment(23).