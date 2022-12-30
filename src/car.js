export default class Car {
  constructor(name, model, factory) {
    this.name = name;
    (this.model = model), (this.factory = factory);
  }

  getName() {
    console.log(this.name);
  }

  getFactory() {
    console.log("This is Pavate Information");
  }
  start() {
    console.log("WOOOOOOOW");
  }
}
