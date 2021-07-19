const Employee = require("../classes/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'name','id','email' properties when called with the 'new' keyword", () => {
      const obj = new Employee("Joe",1,"joe@gmail.com");

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
    });

    it("should set 'name' when created", () => {
      const name = "Joe";

      const obj = new Employee(name, 1, "joe@gmail.com");

      expect(obj.name).toEqual(name);
    });
    it("should set 'id' when created", () => {
      const id = 1;

      const obj = new Employee("Joe", id, "joe@gmail.com");

      expect(obj.id).toEqual(id);
    });
    it("should set 'email' when created", () => {
      const email = "joe@gmail.com";

      const obj = new Employee("Joe", 1, email);

      expect(obj.email).toEqual(email);
    });
  });

  describe("getRole", () => {
    it('should return "Employee"', () => {
      const obj = new Employee("Joe", 1, "joe@gmail.com");

      expect(obj.getRole()).toEqual("Employee");
    });
  });
  describe("getId", () => {
    it("should return id", () => {
      const obj = new Employee("Joe", 1, "joe@gmail.com");

      expect(obj.getId()).toEqual(1);
    });
  });
  describe("getName", () => {
    it("should return name", () => {
      const obj = new Employee("Joe", 1, "joe@gmail.com");

      expect(obj.getName()).toEqual("Joe");
    });
  });
  describe("getEmail", () => {
    it("should return email", () => {
      const obj = new Employee("Joe", 1, "joe@gmail.com");

      expect(obj.getEmail()).toEqual("joe@gmail.com");
    });
  });
});
