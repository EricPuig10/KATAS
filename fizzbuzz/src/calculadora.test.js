const calculadora = require ('./calculadora')


test ('initial total num to be 0',  () => {
   
    expect(calculadora.total).toBe (0)
    })

test ('calculator sum number total',  () => {
   //escenari
   calculadora.sum(2);
   //acció
    let result = calculadora.total;
    //resultat esperat
    expect(result).toBe (2);
    });
    
test ('calculator rest number total',  () => {
   calculadora.rest(1);
   let result = calculadora.total;
    expect(result).toBe (1);
    });   

test ('calculator multiplicar number total',  () => {
   calculadora.mult(8);
   let result = calculadora.total;
    expect(result).toBe (8);
    });

test ('calculator dividir number total',  () => {
   calculadora.div(2);
   let result = calculadora.total;
    expect(result).toBe (4);
    });

test ('calculator porcentaje number total',  () => {
    let initialValue = 12
    let result = calculadora.porcent(initialValue);
    expect(result).toBe (2);
    });

test ('calculator number ispar?',  () => {
   calculadora.esPar();
   let result = calculadora.esPar(8);
    expect(result).toBe (true);
    });

test ('calculator num >',  () => {
   calculadora.older(4,8);
   let result = calculadora.older(4,8)
    expect(result).toBe (8);
    });

test ('arrayList sum',  () => {
    calculadora.sumArray([1,2,3,4])
    let result = calculadora.sumArray([1,2,3,4])
    expect(result).toBe(10);
    });

test ('arrayList return arrayList nums >= 5',  () => {
    let listInt = [1,2,3,4,5,6,7,8,9]


    let result = calculadora.mayorQue(listInt)
   
    
    expect(result).toContain(5,6,7,8,9);
})
    


