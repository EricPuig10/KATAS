const fizzBuzz2 = require ('./fizzBuzz2')

test ('should return array with the numbers divisibles for param num',  () => {
    let numList = [1,2,3,4,5,6,7,8,9,10]
    let num = 2

    let result = fizzBuzz2 (numList, num)

    expect(result).toContain(2,4,6,8,10);
    })


  