import React from 'react'
import "../CSS/ProductCard.css"
import Navbar from './Navbar';
import {useParams} from "react-router-dom"
import { useSelector } from 'react-redux'
import {BsCurrencyRupee} from "react-icons/bs"

function ProductCard() {
    const id=useParams().id
    const data=useSelector(state=>state.productData).filter(item=>item.id===+id)
  return (
    <>
      <Navbar />
      <div className='main product-card'>
        <div className='card'>
        <header>{data[0].category} Category</header>
        <section>
            <div className='p-left'>
                <img src={data[0].image} alt={data[0].id} loading="lazy" width="86%" height="90%" />
            </div>
            <div className='p-right'>
                <div>
                <label>Product Name</label>
                <p>{data[0].title}</p>
                </div>
                <div>
                <label>Product Price</label>
                <p><BsCurrencyRupee/>{data[0].price}</p>
                </div>
                <div>
                <label>Product Description</label>
                <p>{data[0].description}</p>
                </div>
                <div>
                <label>Product Rating</label>
                <p>{data[0].rating.rate}</p>
                </div>
            </div>
        </section>
        </div>
      </div>
    </>
  )
}

export default ProductCard
