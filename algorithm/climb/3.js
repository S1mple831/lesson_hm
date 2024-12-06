//动态规划
//算法里面非常牛逼的一种，神来之笔
//- 得到达成某个目的的解法个数
//- 不关心具体的过程

//- 动态规划自底向上 去解决问题  迭代
//- 适合用动态规划 适合最终值  最优解 dp
//- 先递归 找到大问题和子问题的关系 -> 状态转移方程
//- 最优子结构  最优子结构是指局部最优解能决定全局最优解
const climbStairs = function(n){
    const f = [];// f[i] 第i层的最后结果
    f[1] = 1;
    f[2] = 2;
    // 迭代
    for(let i=3;i<=n;i++){
        f[i] = f[i-1] + f[i-2]
    }
    return f[n];
}

console.time("climb")
climbStairs(50)
console.timeEnd("climb")