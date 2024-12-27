// es6 + 数组
class ArrayQueue{
   #nums // 属性声明区域  数组 私有化 es6
   #front = 0; // 队头 内存的优化
   #queSize = 0; // 队列长度
    constructor(capacity){
        // 分配了capacity单位连续的空间
        // 这段内存就在缓存中
       this.#nums = new Array(capacity);
  }
  // 满足ADT 抽象数据类型
  get size (){
    return this.#queSize;
  }
  push(num){
    if (this.size === this.capacity){
        console.log('队列已满');
        return;
    }
    // 求余 可以拿到队尾的下标 rear
    const rear = (this.#front + this.size) % this.capacity
    this.#nums[rear] = num;
    this.#queSize++;
  }
  pop(){
    const num = this.peek();//获取队头元素的值
    this.#front = (this.#front + 1) % this.capacity;
    this.#queSize--;
    return num;
  }

  peek(){
     if (this.isEmpty()) throw new Error('队列为空');
     return this.#nums[this.#front];
  }
  isEmpty(){
    return this.#queSize === 0
  }
  toArray(){
    const arr = new Array(this.size); // 创建一个空数组
    for (let i = 0,j = this.#front;i< this.size;i++,j++){
      arr[i] = this.#nums[j % this.capacity];
    }
    return arr;
  }
}

const queue = new ArrayQueue();
console.log(queue.nu)