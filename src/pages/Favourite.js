import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Favourite = ({favourites, setFavourites})=>{

    const removeFavourite = (id)=>{
        setFavourites(favourites => favourites.filter(item => item.id != id))
    }

    return <>
    <Navbar />
    <div className="mx-5">
        {favourites.length > 0 && favourites.map(item => <div className="shadow-sm p-3 mt-5 ">
                <Link to = {`/posts/${item.id}`} state={item}  style={{textDecoration: 'none'}}>
                    <div key = {item.id}>
                        <h4>{item.title}</h4>
                        <h5>Author: {item.author}</h5>
                    </div>
                </Link>
                <button className="btn btn-primary" onClick={()=>removeFavourite(item.id)}>Remove from Favourites</button>
            </div>
        )}

        {favourites.length == 0 && <div className="d-flex " style={{height: '80vh'}}>
                <div className="m-auto">
                    <h2>No Favourites Found!</h2>
                    <p>Please mark blogs as Favourite to see your favourites here</p>
                </div>
            </div>}
        
    </div>
        

</>
}


export default Favourite;