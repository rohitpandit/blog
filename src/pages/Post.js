import { Link } from "react-router-dom";

const Post = ()=>{
    return <>
    <div>
        <Link to='/' >Home</Link>
        <Link to='/favourite' >Favourite</Link>
    </div>
    <div>
        <div>POST data</div>
        <div>Author D</div>    
    </div>
</>
}

export default Post;