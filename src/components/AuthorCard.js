const AuthorCard = ({data})=>{
    return <div className="m-4 " >
        <p className="my-1">Author: {data.name}</p>
        <p className="my-1">Email: {data.email}</p>
        <p className="my-1">Phone: {data.phone}</p>
        <p className="my-1">City: {data.address.city}</p>
    </div>
}

export default AuthorCard;