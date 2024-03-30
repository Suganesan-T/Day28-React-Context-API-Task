import { ProductContext, ProductProvider } from './context'
import { useContext } from 'react'
function Card({item}) {
    const {products,setProducts} = useContext(ProductContext)

    let change = (a)=>{
        setProducts(products.map((value,index)=>{
            if (value.id==item.id){
                value.quantity=a
            }
            return value
        }))
    }
    let remove = (a)=>{
        setProducts(products.filter((value,index)=>{
            if (value.id!=a){
                return value
            }
        
        }))
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={item.thumbnail} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <div >
                                        
                                        <h5 className="card-title">{item.title}</h5>
                                        <div className="col text-end">
                                            <span className="quan">Quantity:
                                            </span>
                                            <select id="quantity" value={item.quantity} onChange={(event)=>{change(event.target.value)}}>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <span className="dummy">    </span>
                                            <span className="price">{`$${item.price*item.quantity}`}</span>
                                        </div>
                                    </div>

                                    <p className="card-text">{item.description}</p>
                                    <p className="card-text"><small className="text-body-secondary">{`Ratings: ${item.rating}`}</small></p>
                                    <div className="col text-end">
                                        <button className="btn btn-danger" onClick={()=>{remove(item.id)}}>Remove</button>
                                    </div>

                                    <hr></hr>

                                    <div className="d-flex justify-content-between">

                                        <p className="card-text"><small className="text-body-secondary">SUBTOTAL</small></p>
                                        <p className="subtotal">{`$${item.price*item.quantity}`}</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="card-text"><small className="text-body-secondary">SHIPPING</small></p>
                                        <p className="shipping">FREE</p>
                                    </div>

                                    <hr></hr>

                                    <div className="d-flex justify-content-between">
                                        <p className="card-text"><small className="text-body-secondary">TOTAL</small></p>
                                        <b><p className="total">{`$${item.price*item.quantity}`}</p></b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card