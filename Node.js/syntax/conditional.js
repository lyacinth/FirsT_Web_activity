var args = process.argv;//
console.log(args[2]);
console.log('A');
console.log('B');
if(args[2] === '1')/*비교해서 조건문 처리함*/{
    console.log('C1');
}
else{
    console.log('C2');
}
console.log('D');