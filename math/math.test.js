
const mathOperations = require("./math");

describe("Testing the math module", () => {
	
	test("test Adding 5 + 24 should return 29", () => {
		let result = mathOperations.add(5, 24);
		expect(result).toBe(29);
	});

	test("Subtract 150 - 50", () => {
		let result = mathOperations.subtract(150, 50);
		expect(result).toBe(100);
	});

	test("Multiply 5 * 5 should return 25", () => {
		let result = mathOperations.multiply(5, 5);
		expect(result).toBe(25);
	});

	test("Divide 30 / 5 should return 6", () => {
		let result = mathOperations.divide(30, 5);
		expect(result).toBe(6);
	});

	test("Squart Root of 25 should return 5", () =>{
		let result = mathOperations.sqrt(25);
		expect(result).toBe(5);
	});

	test("Max Number between 2,3,4,6,23 should return 23", () =>{
		let result = mathOperations.max(4,20)
		expect(result).toBe(20)
	})
});
