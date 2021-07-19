const Intern = require("../classes/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should set 'school' when created", () => {
      const school = "UofA";

      const obj = new Intern("Joe", 1, "joe@gmail.com", school);

      expect(obj.school).toEqual(school);
    });
  });

  describe("getRole", () => {
    it('should return "Intern"', () => {
      const obj = new Intern("Joe", 1, "joe@gmail.com", "UofA");

      expect(obj.getRole()).toEqual("Intern");
    });
  });
  describe("getSchool", () => {
    it("should return school", () => {
      const school = "UofA";

      const obj = new Intern("Joe", 1, "joe@gmail.com", school);

      expect(obj.getSchool()).toEqual(school);
    });
  });
});