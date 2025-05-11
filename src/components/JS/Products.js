import React,{useState,useEffect} from 'react'
import "../CSS/Products.css";
import Navbar from './Navbar'
import ProductList from './ProductList'
import { useDispatch } from "react-redux";
import {setproductData} from '../Redux-Toolkit/Slices/productData';

const categoryList=["Electronics","Jewelery","Men's clothing","Women's clothing"]
function Products() {
  const [selectedCategory,setSelectedCategory]=useState("electronics")
  const dispatch=useDispatch()
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
            .then(res=>res.json())
            .then(json=>{dispatch(setproductData(json))})
            .catch(e=>console.log(e))
   },[selectedCategory])
  function change(e){
    const clicked=e.target.innerText.toLowerCase();
    if(clicked!==selectedCategory){
      setSelectedCategory(clicked)
    }
  }
  return (
    <>
    <Navbar/>
    <div className='main products'>
      <div className='categories'>
        <ul>
          {categoryList.map(item=><li key={item} onClick={(e)=>change(e)}>{item}</li>)}
        </ul>
      </div>
      <div className='products-list'>
        <ProductList/>
      </div>
    </div>
    </>
  )
}

export default Products
