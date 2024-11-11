//代码的执行次数 T(n)
function traverse(arr){
    var len = arr.length;//1次
    for(var i = 0;i<len;i++){//1+n+1+n
        console.log(arr[i]);//n
    }
}
//T(n)=1+n+1+n+n=3n+3=O(n)  当n趋于无穷时，忽略常数项，时间复杂度为O(n)
traverse();