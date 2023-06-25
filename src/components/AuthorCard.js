const AuthorCard = ({data})=>{
    return <>
        <h4>Name: {data.name}</h4>
        <h5>Email: {data.email}</h5>
        <h5>Phone: {data.phone}</h5>
        <h5>City: {data.address.city}</h5>
    </>
}

export default AuthorCard;