const fizzBuzz = require ('./fizzBuzz')


test ('should return Fizz if param is 3 div',  () => {
let result = fizzBuzz(3)
expect(result).toBe ("Fizz")
})

test ('should return Buzz if param is 5 div',  () => {
    let result = fizzBuzz(5)
    expect(result).toBe ("Buzz")
    })

test ('Should return FizzBuzz if param is 5 div && 3 div',  () => {
    let result = fizzBuzz(15)
    expect(result).toBe ("FizzBuzz")
    })

test ('Should return num if param is not 5 div or 3 div',  () => {
    let result = fizzBuzz(2)
    expect(result).toBe(2)
    })


    


