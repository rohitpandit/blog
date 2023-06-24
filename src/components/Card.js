import { Card } from "antd"
import { Link } from "react-router-dom";

const CardElem =({data}) =>{
    return (
        <>
            <Link to = {`/posts/${data.id}`} >
                <Card title={data.title} >
                    <p>{data.body}</p>
                </Card>
            </Link>
        </>
    )
}


export default CardElem;
