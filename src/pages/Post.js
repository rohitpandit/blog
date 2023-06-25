import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import SinglePostCard from "../components/SinglePostCard.js";
import Loader from "../components/Loader.js";
import Error from "../components/Error.js";
import AuthorCard from "../components/AuthorCard.js";
import Navbar from "../components/Navbar.js";

const Post = ({favourites, setFavourites})=>{
    const location = useLocation();
    let [post, setPost] = useState(null)
    let [postError, setPostError] = useState(null);
    let [postCurrentState, setPostCurrentState] = useState('loading');
    let [author, setAuthor] = useState(null)
    let [authorError, setAuthorError] = useState(null);
    let [authorCurrentState, setAuthorCurrentState] = useState('loading');

    let getPost = async ()=>{
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${location.state.id}`);
    };


    let getAuthor = async ()=>{
        return axios.get(`https://jsonplaceholder.typicode.com/users/${location.state.userId}`);
    };

    const toggleFavourites = () =>{
        let temp = {title: post.title, author: author.name, id:post.id, userId: author.id}
        let index = favourites.findIndex(item => item.id == post.id);
        console.log('index: ', index)
        if(index == -1){
            console.log('coming insdie')
            setFavourites(favourites=> [...favourites, temp])
        }else{
            setFavourites(favourites => favourites.filter(item => item.id !== post.id))
        }
        console.log(favourites)
    }



    useEffect(  ()=>{
        getPost()
        .then(item => {
            console.log('item: ', item);
            setPost(item.data);
            setPostCurrentState('success')
        })
        .catch(error => {
            console.log(error)
            setPostError(error);
            setPostCurrentState('error')
        })

    },[])


    useEffect(  ()=>{
        getAuthor()
        .then(item => {
            console.log('item: ', item);
            setAuthor(item.data);
            setAuthorCurrentState('success')
        })
        .catch(error => {
            console.log(error)
            setAuthorError(error);
            setAuthorCurrentState('error')
        })

    },[])


    return <>
        <Navbar />
        <>
            <div>
                {postCurrentState == 'loading' && <Loader />}
                {postCurrentState == 'error' && <Error error={postError} />}
                {postCurrentState == 'success' && <SinglePostCard data = {post} />}
            </div>
            <div>
                {authorCurrentState == 'loading' && <Loader />}
                {authorCurrentState == 'error' && <Error error={authorError} />}
                {authorCurrentState == 'success' && <AuthorCard data = {author} />}
            </div>
            <button onClick={()=>{toggleFavourites()}}>
                {post && favourites.findIndex(item => item.id == post.id) == -1 ? `Add to Favourites` : `remove Favourite`}</button>
        </>
    </>
}


export default Post;