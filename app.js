class State {
  constructor() {
    if (this.constructor === State) {
      throw new Error("Abstract classes can not be instantiated");
    }
  }

  getBenifits() {}
}

class SilverState extends State {
  getBenifits() {
    console.log("Silver account benifits");
  }
}

class GoldState extends State {
  getBenifits() {
    console.log("Gold account benifits");
  }
}

class Acount {
  constructor() {
    this.state = new SilverState();
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
    this.evaluateState();
  }
  withdraw(amount) {
    this.balance -= amount;
    this.evaluateState();
  }

  evaluateState() {
    if (this.balance >= 5000) {
      this.state = new GoldState();
    } else {
      this.state = new SilverState();
    }
  }
  getBenifits() {
    this.state.getBenifits();
  }
}

const acc = new Acount();
acc.getBenifits();

acc.deposit(4000);
acc.getBenifits();

acc.deposit(1000);
acc.getBenifits();

acc.withdraw(1000);
acc.getBenifits();
