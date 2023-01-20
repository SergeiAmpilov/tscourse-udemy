class Vehicle44 {
  public make: string;
  private damages: string[];
  private _model: string;
  protected run: number;

  constructor() {
    this.damages = ['--'];
  }

  addDamage(d: string) {
    this.damages.push(d);
  }

  set model(s: string) {
    this._model = `mod - ${s}`;
  }

  get model(): string {
    return this._model;
  }
}

class EuroTruck44 extends Vehicle44 {
  constructor() {
    super();
    this.run = 10_000;
  }
} 


const vh44 = new Vehicle44();
vh44.make = ' vw';
vh44.addDamage('corrupt');
vh44.model = '69';
console.log(vh44.model);
console.log(vh44);


const tr44 = new EuroTruck44();
// tr44.
console.log(tr44);