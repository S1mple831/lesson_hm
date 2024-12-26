console.log(1+'1'); // 11
console.log(+'1');// 1
console.log(+ [])// 0
console.log(+['1']);// 1
console.log(+['1,2,3']);// NaN

console.log(+{})// NaN {}=>{}=>[Object object] => NaN

console.log([]+{});// []=>'' =>[object Object] => ''+{} => ''+[object Object] => [object Object]
console.log({}+{});// {} => [object Object] => [object Object] => ''+[object Object] => [object Object])

console.log(42 ==['42'])

console.log(true =='2')// false
