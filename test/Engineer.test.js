const Engineer = require("../lib/Engineer");
const name = "Jack Han";
const id = "1";
const email = "1@gmail.com";
const github = "JackHan";
const employee = new Engineer(name, id, email, github);

describe("Engineer", () => {
  describe("functions", () => {
    it("should return Engineer name", () => {
      let result = employee.getName();
      expect(result).toEqual("Jack Han");
    });

    it("should return engineer ID", () => {
        let result = employee.getId();
        expect(result).toEqual("1");
    });

    it("should return engineer email", () => {
        let result = employee.getEmail();
        expect(result).toEqual("1@gmail.com");
    });

    it("should return engineer GitHub", () => {
        let result = employee.getGithub();
        expect(result).toEqual("JackHan");
    });

    it("should return type Engineer", () => {
      let result = employee.getRole();
      expect(result).toEqual("Engineer");
    });
  })});