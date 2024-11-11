const len = arr.length;
//此循环 遍历
// for(let i = 0;i < len;i++){
//     console.log(arr[i],i);
// }

arr.forEach(function(item,index){
console.log(item,index);
})//调用了function 函数，item申请一个新的空间