//生成一个18岁到55岁的随机年龄
function generateRandomAge(min, max) {
   // return Math.floor(Math.random() * (55-18+1))+18;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 调用函数，获取18至55之间的随机年龄
let age = getRandomAge(18, 55);
console.log(age);