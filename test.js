//test("capitalize", () => {
  //  expect(capitalize("andrei")).toBe("Andrei");
//});

function capitalize(string) {
    let capitalized = string.charAt(0).toUpperCase() + string.slice(1);
    return capitalized;
}

//test("reverse", () => {
  //  expect(reverse("rosu")).toBe("usor");
//});


function reverse(string) {
    let reversed = string.split("").reverse().join("");
    return reversed;
}

test("2+2=4", () => {
    expect(calculator.sum(2,2)).toBe(4);
})
test("10-5=5", () => {
    expect(calculator.substract(10,5)).toBe(5);
})
test("9:3=3", () => {
    expect(calculator.devide(9,3)).toBe(3);
})
test("9*3=3", () => {
    expect(calculator.multiply(9,3)).toBe(27);
})

const calculator = {
    sum: function add(a,b) { return a+b},
    substract : function substract(a,b) { return a-b},
    devide: function devide(a,b) { return a/b},
    multiply: function multiply(a,b) { return a*b}
}


