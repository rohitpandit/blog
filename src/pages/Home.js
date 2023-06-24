import axios from "axios";
import { useEffect, useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import CardElem  from '../components/Card.js'
import Loader from "../components/Loader.js";
import Error from '../components/Error.js'

const Home = ()=>{

    let [posts, setPosts] = useState([]);
    let [error, setError] = useState(null);
    let [currentState, setCurrentState] = useState('loading');

    let getPosts = async  ()=>{
        return axios.get('https://jsonplaceholder.typicode.com/posts');
    };

    useEffect(  ()=>{
        getPosts()
        .then(item => {
            console.log('item: ', item);
            setPosts(item.data);
            setCurrentState('success')
        })
        .catch(error => {
            console.log(error)
            setError(error);
            setCurrentState('error')
        })

    },[])


    return <>
        <div>
            <Link to='/' >Home</Link>
            <Link to='/favourite' >Favourite</Link>
        </div>
        <>
            {currentState == 'loading' && <Loader />}
            {currentState == 'error' && <Error error={error} />}

            {currentState == 'success' && posts.map(item => <>
                <CardElem data = {item} />
            </>)}

        </>
        
    </>
}


export default Home;