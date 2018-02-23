class vendingMachine {
  constructor(coke, chips, bars, twoonies, loonies, quarters, dimes, nickels) {
    (this.coke = coke),
      (this.chips = chips),
      (this.bars = bars),
      (this.twoonies = { value: 200, quantity: twoonies }),
      (this.loonies = { value: 100, quantity: loonies }),
      (this.quarters = { value: 25, quantity: quarters }),
      (this.dimes = { value: 10, quantity: dimes }),
      (this.nickels = { value: 5, quantity: nickels });
  }

  printInventory() {
    return `coke: ${this.coke}, chips: ${this.chips}, bars:${this.bars}`;
  }
  printBank() {
    return `twoonies: ${this.twoonies.quantity}, loonies: ${
      this.loonies.quantity
    }, quarters: ${this.quarters.quantity}, dimes: ${
      this.dimes.quantity
    }, nickels: ${this.nickels.quantity}`;
  }
  refillInventory(product, quantity) {
    if (product == undefined || quantity == undefined) {
      return "Oops";
    }
    if (product == "coke") {
      this.coke = this.coke + quantity;
      return `now coke: ${this.coke}`;
    }
    if (product == "chips") {
      this.chips = this.chips + quantity;
      return `now chips: ${this.chips}`;
    }
    if (product == "bars") {
      this.bars = this.bars + quantity;
      return `now bars: ${this.bars}`;
    }
  }
  refillBank(coin, quantity) {
    if (coin == undefined || quantity == undefined) {
      return "Oops";
    }
    if (coin == "twoonies") {
      this.twoonies.quantity = this.twoonies.quantity + quantity;
      return `now twoonies: ${this.twoonies.quantity}`;
    }
    if (coin == "loonies") {
      this.loonies.quantity = this.loonies.quantity + quantity;
      return `now loonies: ${this.loonies}`;
    }
    if (coin == "quarters") {
      this.quarters.quantity = this.quarters.quantity + quantity;
      return `now quarters: ${this.quarters.quantity}`;
    }
    if (coin == "dimes") {
      this.dimes.quantity = this.dimes.quantity + quantity;
      return `now dimes: ${this.dimes.quantity}`;
    }
    if (coin == "nickels") {
      this.nickels.quantity = this.nickels.quantity + quantity;
      return `now nickels: ${this.nickels.quantity}`;
    }
  }
  dispenseTreats(
    selection,
    quantity,
    twoonies,
    loonies,
    quarters,
    dimes,
    nickels
  ) {
    if (
      selection == undefined ||
      quantity == undefined ||
      twoonies == undefined ||
      loonies == undefined ||
      quarters == undefined ||
      dimes == undefined ||
      nickels == undefined
    ) {
      return "Oops";
    }
    let twos = 0;
    let loons = 0;
    let quart = 0;
    let dim = 0;
    let nick = 0;

    if (
      (selection =
        "coke" &&
        twoonies * 200 +
          loonies * 100 +
          quarters * 25 +
          dimes * 10 +
          nickels * 5 >=
          quantity * 125)
    ) {
      const changeTotal =
        twoonies * 200 +
        loonies * 100 +
        quarters * 25 +
        dimes * 10 +
        nickels * 5 -
        quantity * 125;
      if (changeTotal % 200 == 0) {
        twos = changeTotal / 200;
        this.twoonies.quantity = this.twoonies.quantity + twos;
      }
      if (changeTotal % 200 != 0) {
        twos = Math.floor(changeTotal / 200);
        this.twoonies.quantity = this.twoonies.quantity + twos;
        const changeTotalWithoutTwoonies =
          changeTotal - 200 * Math.floor(changeTotal / 200);
        if (changeTotalWithoutTwoonies % 100 == 0) {
          loons = changeTotalWithoutTwoonies / 100;
          this.loonies.quantity = this.loonies.quantity + loons;
        }
        if (changeTotalWithoutTwoonies % 100 != 0) {
          loons = Math.floor(changeTotalWithoutTwoonies / 100);
          this.loonies.quantity = this.loonies.quantity + loons;
          const changeTotalWithoutLoonies =
            changeTotalWithoutTwoonies -
            100 * Math.floor(changeTotalWithoutTwoonies / 100);
          if (changeTotalWithoutLoonies % 25 == 0) {
            quart = changeTotalWithoutLoonies / 25;
            this.quarters.quantity = this.quarters.quantity + quart;
          }
          if (changeTotalWithoutLoonies % 25 != 0) {
            quarts = Math.floor(changeWithoutLoonies / 25);
            this.quarters.quantity = this.quarters.quantity + quart;
            const changeTotalWithoutQuarters =
              changeTotalWithoutLoonies -
              25 * Math.floor(changeTotalWithoutLoonies / 25);
            if (changeWithoutQuarters % 10 == 0) {
              dim = changeWithoutQuarters / 10;
              this.dimes.quantity = this.dimes.quantity + dim;
            }
            if (changeWithoutQuarters % 10 != 0) {
              dim = Math.floor(changeWithoutQuarters / 10);
              this.dimes.quantity = this.dimes.quantity + dim;
              const changeTotalWithoutDimes =
                changeTotalWithoutQuarters -
                10 * Math.floor(changeTotalWithoutQuarters / 10);
              nick = changeTotalWithoutDImes / 5;
              this.nickels.quantity = this.nickels.quantity + nick;
            }
          }
        }
      }
      this.coke = this.coke - quantity;

      return `Heres's ${quantity} coke/s, and your ${twos} twoonies, ${loons} loonies , ${quart} quarters , ${dim} dimes, ${nick} nickels`;
    }
    if (
      (selection =
        "coke" &&
        twoonies * 200 +
          loonies * 100 +
          quarters * 25 +
          dimes * 10 +
          nickels * 5 <
          quantity * 125)
    ) {
      return "Not Enough Funds";
    }
    if (
      (selection =
        "chips" &&
        twoonies * 200 +
          loonies * 100 +
          quarters * 25 +
          dimes * 10 +
          nickels * 5 >=
          quantity * 125)
    ) {
      const changeTotal =
        twoonies * 200 +
        loonies * 100 +
        quarters * 25 +
        dimes * 10 +
        nickels * 5 -
        quantity * 125;
      if (changeTotal % 200 == 0) {
        twos = changeTotal / 200;
        this.twoonies.quantity = this.twoonies.quantity + twos;
      }
      if (changeTotal % 200 != 0) {
        twos = Math.floor(changeTotal / 200);
        this.twoonies.quantity = this.twoonies.quantity + twos;
        const changeTotalWithoutTwoonies =
          changeTotal - 200 * Math.floor(changeTotal / 200);
        if (changeTotalWithoutTwoonies % 100 == 0) {
          loons = changeTotalWithoutTwoonies / 1;
          this.loonies.quantity = this.loonies.quantity + loons;
        }
        if (changeTotalWithoutTwoonies % 100 != 0) {
          loons = Math.floor(changeTotalWithoutTwoonies / 100);
          this.loonies.quantity = this.loonies.quantity + loons;
          const changeTotalWithoutLoonies =
            changeTotalWithoutTwoonies -
            100 * Math.floor(changeTotalWithoutTwoonies / 100);
          if (changeTotalWithoutLoonies % 25 == 0) {
            quart = changeTotalWithoutLoonies / 25;
            this.quarters.quantity = this.quarters.quantity + quart;
          }
          if (changeTotalWithoutLoonies % 25 != 0) {
            quarts = Math.floor(changeWithoutLoonies / 25);
            this.quarters.quantity = this.quarters.quantity + quart;
            const changeTotalWithoutQuarters =
              changeTotalWithoutLoonies -
              25 * Math.floor(changeTotalWithoutLoonies / 25);
            if (changeWithoutQuarters % 10 == 0) {
              dim = changeWithoutQuarters / 10;
              this.dimes.quantity = this.dimes.quantity + dim;
            }
            if (changeWithoutQuarters % 10 != 0) {
              dim = Math.floor(changeWithoutQuarters / 10);
              this.dimes.quantity = this.dimes.quantity + dim;
              const changeTotalWithoutDimes =
                changeTotalWithoutQuarters -
                10 * Math.floor(changeTotalWithoutQuarters / 10);
              nick = changeTotalWithoutDImes / 5;
              this.nickels.quantity = this.nickels.quantity + nicks;
            }
          }
        }
      }
      this.chips = this.chips - quantity;

      return `Heres's ${quantity} chips, and your ${twos} twoonies, ${loons} loonies , ${quart} quarters , ${dim} dimes, ${nick} nickels`;
    }
    if (
      (selection =
        "chips" &&
        twoonies * 200 +
          loonies * 100 +
          quarters * 25 +
          dimes * 10 +
          nickels * 5 <
          quantity * 125)
    ) {
      return "Not Enough Funds";
    }

    if (
      (selection =
        "bars" &&
        twoonies * 200 +
          loonies * 100 +
          quarters * 25 +
          dimes * 10 +
          nickels * 5 >=
          quantity * 175)
    ) {
      const changeTotal =
        twoonies * 200 +
        loonies * 100 +
        quarters * 25 +
        dimes * 10 +
        nickels * 5 -
        quantity * 175;
      if (changeTotal % 200 == 0) {
        twos = changeTotal / 200;
        this.twoonies.quantity = this.twoonies.quantity + twos;
      }
      if (changeTotal % 200 != 0) {
        twos = Math.floor(changeTotal / 200);
        this.twoonies.quantity = this.twoonies.quantity + twos;
        const changeTotalWithoutTwoonies =
          changeTotal - 200 * Math.floor(changeTotal / 200);
        if (changeTotalWithoutTwoonies % 100 == 0) {
          loons = changeTotalWithoutTwoonies / 1;
          this.loonies.quantity = this.loonies.quantity + loons;
        }
        if (changeTotalWithoutTwoonies % 100 != 0) {
          loons = Math.floor(changeTotalWithoutTwoonies / 100);
          this.loonies.quantity = this.loonies.quantity + loons;
          const changeTotalWithoutLoonies =
            changeTotalWithoutTwoonies -
            100 * Math.floor(changeTotalWithoutTwoonies / 100);
          if (changeTotalWithoutLoonies % 25 == 0) {
            quart = changeTotalWithoutLoonies / 25;
            this.quarters.quantity = this.quarters.quantity + quart;
          }
          if (changeTotalWithoutLoonies % 25 != 0) {
            quarts = Math.floor(changeWithoutLoonies / 25);
            this.quarters.quantity = this.quarters.quantity + quart;
            const changeTotalWithoutQuarters =
              changeTotalWithoutLoonies -
              25 * Math.floor(changeTotalWithoutLoonies / 25);
            if (changeWithoutQuarters % 10 == 0) {
              dim = changeWithoutQuarters / 10;
              this.dimes.quantity = this.dimes.quantity + dim;
            }
            if (changeWithoutQuarters % 10 != 0) {
              dim = Math.floor(changeWithoutQuarters / 10);
              this.dimes.quantity = this.dimes.quantity + dim;
              const changeTotalWithoutDimes =
                changeTotalWithoutQuarters -
                10 * Math.floor(changeTotalWithoutQuarters / 10);
              nick = changeTotalWithoutDImes / 5;
              this.nickels.quantity = this.nickels.quantity + nick;
            }
          }
        }
      }
      this.bars = this.bars - quantity;

      return `Heres's ${quantity} bars, and your ${twos} twoonies, ${loons} loonies , ${quart} quarters , ${dim} dimes, ${nick} nickels`;
    }
    if (
      (selection =
        "bars" &&
        twoonies * 200 +
          loonies * 100 +
          quarters * 25 +
          dimes * 10 +
          nickels * 5 >=
          quantity * 175)
    ) {
      return "Not Enough Funds";
    }
  }
}

module.exports = vendingmachine1 = new vendingMachine(
  10,
  10,
  10,
  100,
  100,
  100,
  100,
  100
);
