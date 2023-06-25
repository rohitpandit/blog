const Error = ({error}) => {
    return (
    <div className="d-flex " style={{height: '80vh'}}>
        <div className="m-auto">
            <h2>{error.message}</h2>
        </div>
    </div>
    )
}

export default Error;