const numbers = [1,2,3,4];
const sum = numbers.reduce(
    (acc,cur)=>{
    console.log(acc,cur,'---------------')
    return acc + cur;
},0
);
console.log(sum);