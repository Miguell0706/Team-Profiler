const Engineer = require("../classes/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should set 'github' when created", () => {
      const github = "Joe123";

      const obj = new Engineer("Joe", 1, "joe@gmail.com", github);

      expect(obj.github).toEqual(github);
    });
  });

  describe("getRole", () => {
    it('should return "Engineer"', () => {
      const obj = new Engineer("Joe", 1, "joe@gmail.com", "Joe123");

      expect(obj.getRole()).toEqual("Engineer");
    });
  });
  describe("getGithub", () => {
    it("should return github", () => {
      const github = "Joe123";

      const obj = new Engineer("Joe", 1, "joe@gmail.com", github);

      expect(obj.getGithub()).toEqual(github);
    });
  });
});
