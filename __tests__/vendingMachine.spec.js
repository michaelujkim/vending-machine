const vendingMachine1 = require("../lib/vendingMachine");
const vendingMachine2 = require("../lib/vendingMachine");
describe("Vending Machine", () => {
  describe("Printing Inventory", () => {
    test("Should return all inventory and quantity", () => {
      const list = vendingMachine1.printInventory();
      expect(vendingMachine1.printInventory()).toEqual(
        "coke: 10, chips: 10, bars:10"
      );
    });
  });
  describe("Refill inventory", () => {
    test("Should return new quantity of updated stock", () => {
      const list = vendingMachine1.refillInventory("coke", 10);
      expect(list).toEqual("now coke: 20");
    });
  });
  describe("Refill inventory with empty argument", () => {
    test("Should return error message", () => {
      const list = vendingMachine1.refillInventory();
      expect(list).toEqual("Oops");
    });
  });

  describe("Refill Bank", () => {
    test("Should return new quantity of coins", () => {
      const list = vendingMachine1.refillBank("quarters", 10);
      expect(list).toEqual("now quarters: 110");
    });
  });
  describe("Refill Bank with empty argument", () => {
    test("Should return error message", () => {
      const list = vendingMachine1.refillBank();
      expect(list).toEqual("Oops");
    });
  });

  describe("Dispense treats enough money", () => {
    test("Should return item, quantity and change", () => {
      const list = vendingMachine1.dispenseTreats("coke", 1, 1, 0, 0, 0, 0);
      expect(list).toEqual(
        "Heres's 1 coke/s, and your 0 twoonies, 0 loonies , 3 quarters , 0 dimes, 0 nickels"
      );
    });
  });
  describe("Indicate not enough money", () => {
    test("Should return item, quantity and change", () => {
      const list = vendingMachine1.dispenseTreats("coke", 1, 0, 1, 0, 0, 0);
      expect(list).toEqual("Not Enough Funds");
    });
  });
  describe("Try to get treats without any argument", () => {
    test("Should return error message", () => {
      const list = vendingMachine1.dispenseTreats();
      expect(list).toEqual("Oops");
    });
  });
  describe("Inventory after dispensation", () => {
    beforeEach(() => {
      vendingMachine2.dispenseTreats("coke", 1, 1, 0, 0, 0, 0);
    });
    test("Should be updates list", () => {
      const list = vendingMachine2.printInventory();
      expect(list).toEqual("coke: 18, chips: 10, bars:10");

      //expecting the calls to persist so takes into account the restock and the initial purchase
    });
  });
});