// 保证类的正常运行
class AutoExpandArrayQueue{
    #nums // 属性声明区域  数组 私有化 es6
    #front = 0; // 队头 内存的优化
    #queSize = 0; // 队列长度
    constructor(capacity){
        // 分配了capacity单位连续的空间
        // 这段内存就在缓存中
       this.#nums = new Array(capacity);
  }

  get capacity(){
    // todo whatever
  return this.#nums.length;
  }

  get size(){
    return this.#queSize
  }

  isEmpty(){
    return this.#queSize === 0;
  }
  push(num){
    if (this.size === this.capacity){
        this.#expandCapacity()
    }
  }
  #expandCapacity(){
      //地址 1000
      //不能干掉别人的
      //重新分配
      //做一次搬运工作
      const newCapacity = this.capacity * 2;
      const newNums = new Array(newCapacity);// 申请全新的空间
      for(let i = 0;i< this.size;i++){
        newArr[i] = this.#nums[(this.#front + i)% this.capacity];
      }
      this.#nums = newArr // 原来内存地址释放
  }
}