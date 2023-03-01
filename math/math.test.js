const mathOperations = require("./math");

describe("Testing the math module", () => {
	test("Adding 5 + 24 should return 29", () => {
		let result = mathOperations.add(5, 24);
		expect(result).toBe(29);
	});

	test("Subtract 150 - 50", () => {
		expect(mathOperations.subtract(150, 50)).toBe(100);
	});

	test("Multiply 5 * 5 should return 25", () => {
		expect(mathOperations.multiply(5, 5)).toBe(25);
	});

	test("Divide 30 / 5 should return 6", () => {
		expect(mathOperations.divide(30, 5)).toBe(6);
	});
});
