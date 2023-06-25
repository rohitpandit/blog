import { Card } from "antd"
import { Link } from "react-router-dom";

const CardElem =({data}) =>{
    return (
        <>
            <Link to = {`/posts/${data.id}`} state={data}  style={{textDecoration: 'none'}}>
                <h4>{data.title}</h4>
            </Link>
            <p>{data.body.substring(0,150) + `...`}</p>

        </>
    )
}


export default CardElem;
