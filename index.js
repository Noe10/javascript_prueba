var num = [1,2,7,5,5,5,5,5,7,8,40,8];

var x = new Set(num);
console.log([...x]);

function quitar(value,indice,self){
    return  self.indexOf(value) === indice;
}

var rep = num.filter(quitar);
console.log(rep);


const cant  = rep.length;
console.log(cant);
