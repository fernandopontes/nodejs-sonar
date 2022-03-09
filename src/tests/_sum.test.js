const sum = require('../sum');

test("add 1 + 2 to be equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});

test("add 2 + 3 to be equal 5", () => {
    expect(sum(2, 3)).toBe(5);
});
