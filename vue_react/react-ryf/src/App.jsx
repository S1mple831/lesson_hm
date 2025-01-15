// 组件就是函数
// 组件首字母大写 复用
// 组件返回值是JSX
function App() {
  // jsx
  // js 函数区域 里面编写html
  let myTitle = <h1>Hello,world</h1>;
  // <!----> /**/
  return (
    //<div> 
   // {myTitle}
   // </div>
   //JSX 最外层只能有且必须有一个节点
   // enclosed tag 封闭标签 -> 原理API fragment 节点
   <div>
   <p>hello</p><p>world</p>
   </div>
  )
}

export default App
