const adultUsers = require ('./users')

  
  
test ('write a function that receive an objects array named users that contains name and age, it should return another array with the users older 18',  () => {
    let users = [
    {
        name: "eric",
        age: 21,
    },
    {
        name: "laura",
        age: 21,
    },
    {
        name: "marc",
        age: 17,
    }, 
    ]
    

    let result = adultUsers (users)
    let expected = [{
        name: "eric",
        age: 21,
    },
    {
        name: "laura",
        age: 21,
    },]

    expect(result).toMatchObject(expected);
    })
