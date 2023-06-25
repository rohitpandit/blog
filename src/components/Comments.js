import { useState } from "react";
import { nanoid } from "nanoid";

const Comments  = ({data, comments,setComments}) =>{
    console.log('comments; ', comments)

    const [comment, setComment] = useState('');
    let filteredComments = comments.filter(item => item.postId == data.id) ;

    const addComment = ()=>{
        let temp = {
            id: nanoid('5'),
            text: comment,
            postId: data.id
        }
        setComments(comments=> [...comments, temp]);
        setComment('')
    }

    return (
        <div className="col-12 col-md-9">
            <div className="d-flex">
                <input className="form-control p-0 m-0" onChange={(e)=>setComment(e.target.value)} value = {comment} />
                <button className="btn btn-primary" onClick={()=>{addComment()}}>add comment</button>
            </div>
            <br/>
            <h3>Comments :</h3>
            <hr />
            <div>
                {filteredComments.map(item =>
                    <div key = {item.id} >
                        <p>{item.text}</p>
                    </div>    
                )}

                {filteredComments.length == 0 && <div>No comments</div>}
            </div>
        </div>
    )
}


export default Comments