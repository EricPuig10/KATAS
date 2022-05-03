

const fizzBuzz2 = (numList, num) => {
/*
let newArray = []  

for (let i =0; i < numList.length; i++){
    if (numList[i] % num == 0){
        newArray.push(numList[i])
    }
    
}

return newArray

*/
let filterArray = numList.filter(item => item % num == 0)
return filterArray
}




module.exports = fizzBuzz2

