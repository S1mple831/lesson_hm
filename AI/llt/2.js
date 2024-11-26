// 代码的可读性 函数名自带解释
function generateRandomGender(){
//return Math.random()>0.5?'男':'女';
const genders=['男','女'];
return genders[Math.floor(Math.random()*genders.length)];

}