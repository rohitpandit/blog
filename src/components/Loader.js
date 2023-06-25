import { Skeleton } from "antd"

const Loader = ()=>{

    return (
    <>  
        <div className="shadow-sm p-3 mt-5">
            <Skeleton />
        </div>
        <div className="shadow-sm p-3 mt-5">
            <Skeleton />
        </div>
        <div className="shadow-sm p-3 mt-5">
            <Skeleton />
        </div>
    </>
    )
    
}


export default Loader;