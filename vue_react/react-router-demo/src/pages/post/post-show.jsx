// hooks params use 好用
import { useParams } from 'react-router-dom'

const PostShow = () => {
    const{postid} = useParams()
    console.log(postid)
    useEffect(()=>{
      document.title = '文章id为${postId}'
    },[])
    return (
      <div>
        <h1>PostShow</h1>
      </div>
    )
  }
  
  export default PostShow