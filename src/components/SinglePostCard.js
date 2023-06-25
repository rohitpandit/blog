const SinglePostCard = ({data}) =>{
    return <div className="">
        <h2>{data.title}</h2>
        <hr/>
        <p>{data.body}</p>
    </div>
}

export default SinglePostCard;