import { Link } from "react-router-dom";

const CardElem =({data}) =>{
    return (
        <div className="shadow-sm p-3 mt-5">
            <Link to = {`/posts/${data.id}`} state={data}  style={{textDecoration: 'none'}}>
                <h4>{data.title}</h4>
            </Link>
            <p>{data.body.substring(0,150) + `...`}</p>

        </div>
    )
}


export default CardElem;
