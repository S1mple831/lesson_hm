import { createRoot } from 'react-dom/client'
import AppRouter from './router'

// vue.use(router)
// web 应用离不开路由 react-router-dom 提供了丰富的路由组件
createRoot(document.getElementById('root')).render(
<AppRouter></AppRouter>
)
