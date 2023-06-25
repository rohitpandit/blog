import { useState, useEffect } from "react";
import axios from "axios";
import {  useLocation } from "react-router-dom";
import SinglePostCard from "../components/SinglePostCard.js";
import Loader from "../components/Loader.js";
import Error from "../components/Error.js";
import AuthorCard from "../components/AuthorCard.js";
import Navbar from "../components/Navbar.js";
import Comments from '../components/Comments.js'
import { loadComments, storeComments } from "../lib/localstore.js";

const Post = ({favourites, setFavourites})=>{
    const location = useLocation();
    let [post, setPost] = useState(null)
    let [comments, setComments] = useState();
    let [postError, setPostError] = useState(null);
    let [postCurrentState, setPostCurrentState] = useState('loading');
    let [author, setAuthor] = useState(null)
    let [authorError, setAuthorError] = useState(null);
    let [authorCurrentState, setAuthorCurrentState] = useState('loading');
  

    const toggleFavourites = () =>{
        let temp = {title: post.title, author: author.name, id:post.id, userId: author.id}
        let index = favourites.findIndex(item => item.id === post.id);
        console.log('index: ', index)
        if(index === -1){
            console.log('coming insdie')
            setFavourites(favourites=> [...favourites, temp])
        }else{
            setFavourites(favourites => favourites.filter(item => item.id !== post.id))
        }
        console.log(favourites)
    }


    useEffect(  ()=>{
        let getPost = async ()=>{
            return axios.get(`https://jsonplaceholder.typicode.com/posts/${location.state.id}`);
        };

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
        let getAuthor = async ()=>{
            return axios.get(`https://jsonplaceholder.typicode.com/users/${location.state.userId}`);
        };

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

    useEffect(()=>{
        setComments(loadComments())
    },[])

    useEffect(()=>{
        storeComments(comments)
        console.log('asdfasd', loadComments())
    }, [comments])

   


    return <>
        <Navbar />
        <div className="mx-5 row ">
            <div className=" col-12 col-md-9 mt-3">
                {postCurrentState === 'loading' && <Loader />}
                {postCurrentState === 'error' && <Error error={postError} />}
                {postCurrentState === 'success' && <SinglePostCard data = {post} />}
            </div>
            <div className="col-12 col-md-3 mt-2">
                <button className=" btn btn-primary" onClick={()=>{toggleFavourites()}}>
                    {post && favourites.findIndex(item => item.id === post.id) === -1 ? `Add to Favourites` : `remove Favourite`}
                </button>
                <div className="shadow my-4 py-2">
                    <h4 className="p-4">Author Details: </h4>
                    <hr className="m-0" />
                    {authorCurrentState === 'loading' && <Loader />}
                    {authorCurrentState === 'error' && <Error error={authorError} />}
                    {authorCurrentState === 'success' && <AuthorCard data = {author} />}
                </div>
            </div>
            <div>
                {postCurrentState === 'success' && <Comments data = {post} comments= {comments} setComments = {setComments} />}
            </div>
        </div>
    </>
}


export default Post;