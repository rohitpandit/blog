import Navbar from "../components/Navbar";

const PageNotFound = () =>{
    return (
        <>
            <Navbar />
            <div className="d-flex " style={{height: '80vh'}}>
                <div className="m-auto">
                    <h2>404! Page Not Found</h2>
                    <p>The Page you are searching is not available</p>
                </div>
            </div>
        </>
    )
}


export default PageNotFound;