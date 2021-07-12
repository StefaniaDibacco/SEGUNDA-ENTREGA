const operacion =  ( a:number, b:number, calculo: string)=>{
   let miPromesa= new Promise (async function (resolve, reject) {
       if (calculo== 'suma') {
        let {Suma} = await import ('./sumaClass');
        let suma= new Suma(a,b);
           resolve(suma.resultado());
        }
       else if (calculo== 'resta') {
        let {Resta} = await import ('./restaClass');
        let resta = new Resta (a,b)
           resolve (resta.resultado());
        }
        else reject (new Error("Calculo no encontrado"));

   })
    return miPromesa;
};

const operaciones= ()=> {
    operacion(6,4, 'suma') .then((resultado)=> {
        console.log(resultado);});
    operacion(6,4, 'resta') .then((resultado)=> {
        console.log(resultado);
    });  

};


operaciones();

