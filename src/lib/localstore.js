const loadComments = () =>{
    let res = localStorage.getItem('comments');
    if(!res || res === 'undefined'  || res === '[]'){
        return [];
    }
    return JSON.parse(res)
}

const storeComments = (comments) =>{
    localStorage.setItem('comments', JSON.stringify(comments))
}

const loadFavourites = ()=>{
    let res = localStorage.getItem('favourites');
    console.log('res;:::::: ', res)
    if(!res || res === 'undefined' || res === '[]'){
        return [];
    }
    return JSON.parse(res)
}

const storeFavourites = (favourites) =>{
    localStorage.setItem('favourites', JSON.stringify(favourites))
}

export {loadComments, storeFavourites, storeComments, loadFavourites }