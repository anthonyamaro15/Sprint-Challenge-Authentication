const supertest = require("supertest");
const server = require("../api/server");

describe("sever.js", () => {
  describe("GET /api/jokes", () => {
    it("should return an array of jokes", () => {
      return supertest(server)
        .get("/api/jokes")
        .then((response) => {
          expect(Array.isArray(response.body)).toBe(false);
        });
    });
  });
  describe("GET /api/jokes", () => {
    it("should return 400 status code", () => {
      return supertest(server)
        .get("/api/jokes")
        .then((res) => {
          expect(res.status).toBe(400);
        });
    });
  });

  describe("POST /api/auth/register", () => {
    it("should create a new user and return 201 status code", () => {
      return supertest(server)
        .post("/api/auth/register")
        .then((response) => {
          expect(response.status).toBe(201);
        });
    });
  });

  //   describe("POST /api/auth/", () => {
  //     it("should return a 201 status code", () => {
  //       return supertest(server)
  //         .post("/api/auth/register")
  //         .then((res) => {
  //           expect(typeof res.body[0]).toBe("number");
  //         });
  //     });
  //   });

  //   describe("POST /api/auth/login", () => {
  //     it("should login and send back token with status code of 200", () => {
  //       return supertest(server)
  //         .post("/api/auth/login")
  //         .then((response) => {
  //           expect(response.status).toBe(200);
  //         });
  //     });
  //   });
  //   describe("POST /api/auth/login", () => {
  //     it("should return an object with 2 properties ", () => {
  //       return supertest(server)
  //         .post("/api/auth/login")
  //         .then((res) => {
  //           expect(Object.keys(res.body)).toHaveLength(2);
  //         });
  //     });
  //   });
});
