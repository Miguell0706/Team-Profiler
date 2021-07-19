const Manager = require("../classes/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should set 'officeNumber' when created", () => {
      const officeNumber = "123";

      const obj = new Manager("Joe", 1, "joe@gmail.com", officeNumber);

      expect(obj.officeNumber).toEqual(officeNumber);
    });
  });

  describe("getRole", () => {
    it('should return "Manager"', () => {
      const obj = new Manager("Joe", 1, "joe@gmail.com", "123");

      expect(obj.getRole()).toEqual("Manager");
    });
  });
  describe("getOfficeNumber", () => {
    it("should return officeNumber", () => {
      const officeNumber = "123";

      const obj = new Manager("Joe", 1, "joe@gmail.com", officeNumber);

      expect(obj.getOfficeNumber()).toEqual(officeNumber);
    });
  });
});