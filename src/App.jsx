import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Card from './card'
import { ProductContext, ProductProvider } from './context'
import { useContext } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
function App() {

  const { products } = useContext(ProductContext)

  return (

    <>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            {
              products.map((item, index) => {
                return <Card key={index} item={item} />
              })
            }
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}


export default App
