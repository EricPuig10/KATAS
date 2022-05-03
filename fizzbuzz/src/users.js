
const adultUsers = (users) => {
/*
let arrayOlderOrEqual18 = []

for (let i = 0; i < users.length; i++){
    if (users[i].age >= 18){
        arrayOlderOrEqual18.push(users[i])
    }
    
}

return arrayOlderOrEqual18

}*/
let usersArray = users.filter(individu => individu.age >= 18)
return usersArray
}
module.exports = adultUsers