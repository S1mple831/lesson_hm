import {
  useEffect,
  useState,
  useRef
} from 'react';

function App() {
  // 主线程的优化
  // 用useRef绑定一个worker 对象 负责大模型的计算  
  const worker = useRef(null);
  useEffect(() => {
    if (!worker.current) {
      // html5 多线程的 WebWorker
      worker.current = new Worker(new URL('./worker.js', import.meta.url), {
        type: 'module'
      })
      // 基于消息机制的 
      worker.current.postMessage({
        type: 'check'
      })
      const onMessageReceived = (e) => {
        console.log(e)
      }
      const onErrorReceived = (e) => {
        
      }
      // 监听worker的消息
      worker.current.onmessage = onMessageReceived
      worker.current.onerror = onErrorReceived

      return () => {
        worker.current.removeEventListener('message', onMessageReceived);
        worker.current.removeEventListener('error', onErrorReceived);
      }
    }
  }, [])
  return (
    <>
    </>
  )
}

export default App