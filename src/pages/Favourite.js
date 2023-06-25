import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Favourite = ({favourites, setFavourites})=>{

    const removeFavourite = (id)=>{
        setFavourites(favourites => favourites.filter(item => item.id != id))
    }

    return <>
    <Navbar />
    <div>
        {favourites.map(item => <div>
                <Link to = {`/posts/${item.id}`} state={item}  style={{textDecoration: 'none'}}>
                    <div key = {item.id}>
                        <h4>{item.title}</h4>
                        <h5>{item.author}</h5>
                    </div>
                </Link>
                <button onClick={()=>removeFavourite(item.id)}>Remove from Favourites</button>
            </div>
        )}
    </div>
        

</>
}


export default Favourite;