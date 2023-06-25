import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home.js'
import Post from './pages/Post.js'
import Favourite from './pages/Favourite.js'
import PageNotFound from './pages/PageNotFound.js';
import './App.css';
import './bootstrap.min.css'
import { loadFavourites, storeFavourites } from './lib/localstore.js';
function App() {

  let [favourites, setFavourites] = useState([]);

  console.log('favourites', favourites)

  useEffect(() =>{
    let fav  =loadFavourites();
    console.log('fav: ',typeof fav, fav)
    setFavourites(loadFavourites())
  },[])

  useEffect(()=>{
    storeFavourites(favourites);
    console.log("asdfasdfasdf: ",typeof loadFavourites(), loadFavourites())
  },[favourites])

  

  let router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    }, 
    {
      path: '/posts/:id',
      element: <Post favourites={favourites} setFavourites = {setFavourites}/>
    },
    {
      path: '/favourite',
      element: <Favourite favourites={favourites} setFavourites = {setFavourites}/> 
    },
    {
      path: '*',
      element: <PageNotFound />
    }
  ])

  return (
    <RouterProvider router = {router} />
  )
}

export default App;
      