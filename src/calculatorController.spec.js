const { addNumbers } = require("./Controllers/calculatorController");

test("returns result if aFunction returns true", () => {
  const req = { query: { num1: "2", num2: "3" } };
  const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

  addNumbers(req, res);

  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({ result: 5 });
});
