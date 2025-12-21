import UseFetch from './UseFetch';

function Product(){
    const {data,loading,error}=UseFetch("https://api.escuelajs.co/api/v1/products");
    console.log(data,loading,error);
    if(loading) return <h1 style={{color:"blue"}}>Loading...</h1>
    if(error) return <h2 style={{color:"red"}}>{{error}}</h2>
    return(
        <>
            <h1>Photos</h1>
            <div className='productList'>
                {
                    data.map((element,index)=>(
                        <div key={index}>
                            <div className='card'>
                                <img src={element.images[0]} alt="" />
                                <p>{element.title}</p>
                            </div>
                        </div>
                    ))
            }
            </div>
        </>
    )
}
export default Product
