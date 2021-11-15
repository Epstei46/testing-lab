const {
    returnTwo,
    greeting,
    add,
    subtract,
    multiply,
    divide
} = require("./functions.js")

test("returnTwo() should return an integer of 2", () => {
    expect(returnTwo()).toEqual(2)
})
test("returnTwo() should have a data type of integer", () => {
    expect(typeof returnTwo()).toBe("number")
})

describe("greeting", () => {
    test("greeting(James) should return the string 'Hello, James.'", () => {
        expect(greeting("James")).toEqual("Hello, James.")
    })
    test("greeting(Jill) should return the string 'Hello, Jill.'", () => {
        expect(greeting("Jill")).toEqual("Hello, Jill.")
    })
    test("greeting(Jill) should have a data type of string", () => {
        expect(typeof greeting("Jill")).toBe("string")
    })
})

describe("Test block for Math functions", () => {
    test("add(1,2) should return the integer 3", () => {
        expect(add(1,2)).toEqual(3)
    })
    test("add(5,9) should return the integer 14", () => {
        expect(add(5,9)).toEqual(14)
    })
    test("subtract(9,2) should return the integer 7", () => {
        expect(subtract(9,2)).toEqual(7)
    })
    test("subtract(2,5) should return the integer -3", () => {
        expect(subtract(2,5)).toEqual(-3)
    })
    test('should return the product of two nums', () => {
        expect(multiply(3,3)).toEqual(9)
        expect(multiply(8,9)).toEqual(72)
    });
    test('should return the quotient of two nums', () => {
        expect(divide(9,3)).toEqual(3)
        expect(divide(18,6)).toEqual(3)
    });
})