const calculadora = {
    total:0,
    
    sum(num) {
        this.total += num;
    },
    rest(num) {
        this.total -= num;
    },
    mult(num) {
        this.total *= num;
    },
    div(num) {
        this.total /=num;
    },
    porcent(initialValue){
        let numResid = initialValue % 5
    
        return numResid
    },
    esPar(num){
    if(num%2==0){
        
        return true
    
    }else{
        
        return false
    }
    },
    older(x,y){
    if (x>y){
        return x;
    }else{
        return y;
    }
    },
    sumArray(arry){
       let suma = 0;
        for (let i = 0; i < arry.length; i++){
        let numero = arry [i];
        if (typeof numero === "number")  suma += numero
        }
        return suma;
    },
    mayorQue(listInt){
        let newListInt = listInt.filter(item => item >= 5)
        return newListInt
         
    }
}
   
    





module.exports = calculadora;