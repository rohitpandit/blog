import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.js'
import Post from './pages/Post.js'
import Favourite from './pages/Favourite.js'
import './App.css';

function App() {

  let router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/posts/:id',
      element: <Post />
    },
    {
      path: '/favourite',
      element: <Favourite /> 
    }
  ])

  return (
    <RouterProvider router = {router} />
  )
}

export default App;
      