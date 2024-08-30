//por: Felipe Augusto Pereira Lemes
var minhaVariavel='GLOBAL';
outraVariavel='GLOBAL';

function minhaFuncao(){
    var minhaVariavel='LOCAL';
    return minhaVariavel;
}

function outraFuncao(){
    outraVariavel='LOCAL';
    return outraVariavel;
}

console.log('minhaVariavel:' + minhaVariavel);
console.log('minhaFuncao:' + minhaFuncao());
console.log('outraVariavel:' + outraVariavel);
console.log('outraFuncao:' + outraFuncao());


