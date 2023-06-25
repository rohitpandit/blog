import axios from "axios";
import { useEffect, useState, useMemo, useCallback, Fragment } from "react";
import CardElem  from '../components/Card.js'
import Loader from "../components/Loader.js";
import Error from '../components/Error.js'
import Navbar from "../components/Navbar.js";

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
        <Navbar />
        <div className="mx-5">
            {currentState === 'loading' && <Loader />}
            {currentState === 'error' && <Error error={error} />}

            {currentState === 'success' && posts.map(item => <Fragment key = {item.id}>
                <CardElem data = {item}  />
            </Fragment>)}

        </div>
        
    </>
}


export default Home;