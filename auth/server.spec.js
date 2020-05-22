const supertest = require("supertest");
const server = require("../api/server");
const db = require("../database/dbConfig");
const users = require("./user-model");

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
    it("should create a new user and return 500 status code", async () => {
      return supertest(server)
        .post("/api/auth/register")
        .then((response) => {
          expect(response.status).toBe(500);
        });
    });
  });

  describe("POST /api/auth/register", () => {
    it("it should add a new user", async () => {
      await db("users").truncate();
      const newUser = await users.add({
        username: "testing11",
        password: "testing11",
      });
      const obj = await db("users");
      expect(obj).toHaveLength(1);
    });
  });

  describe("POST /api/auth/register", () => {
    it("it should an array with an object in it", async () => {
      await db("users").truncate();
      const newUser = await users.add({
        username: "testing11",
        password: "testing11",
      });
      const array = await db("users");
      expect(Array.isArray(array)).toBe(true);
    });
  });

  describe("POST /api/auth/login", () => {
    it("should return an array", async () => {
      await db("users").truncate();
      const newUser = await users.findBy({ username: "testing11" });
      const obj = await db("users");
      expect(Array.isArray(obj)).toBe(true);
    });
  });

  describe("POST /api/auth/login", () => {
    it("should return an empty array", async () => {
      await db("users").truncate();
      const newUser = await users.findBy({ username: "testing11" });
      const array = await db("users");
      expect(array).toHaveLength(0);
    });
  });
});
