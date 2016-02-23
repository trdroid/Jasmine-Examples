describe('Math Operations', function() {
	it('perform addition on two numbers', function() {
		/*
			Create an expectation using jasmine's expect() function

			Pass in an expression that would be evaluated to a value (add(5, 10), in this case)

			Use a matcher (toBe() in this case) to assert the expectation on the result value of the expression
				passed to the expect() function
		*/
		expect(add(5, 10)).toBe(15);
	})
});