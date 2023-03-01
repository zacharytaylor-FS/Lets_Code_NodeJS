const { uppercase, lowercase } = require("./string");
describe("Testing the string module", () => {
	test("Should uppercase a string input", () => {
		const result = uppercase("bob");
		expect(result).toBe("BOB");

		// * One Line
		// expect(uppercase("bob")).toBe("BOB");
	});

	// lowercase function
	test("Should lowercase a string input", () => {
		expect(lowercase("FULL SAIL")).toBe("full sail");
	});
});
