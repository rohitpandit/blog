import { Link } from "react-router-dom";
import CardElem from "../components/Card";

const Favourite = ()=>{
    return <>
    <div>
        <Link to='/' >Home</Link>
        <Link to='/favourite' >Favourite</Link>
    </div>
    <div><>
            <div><CardElem /></div>
            <div><CardElem /></div>
        </></div>
</>
}


export default Favourite;