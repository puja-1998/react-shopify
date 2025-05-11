import React from "react";
import { useSelector} from "react-redux";
import {useNavigate} from "react-router-dom"
function ProductList() {
  const data = useSelector((state) => state.productData);
  const navigate=useNavigate()
  function clickedProduct(e,id) {
    navigate(`/products/${id}`)
  }
  return (
    <div className="productList">
      <ul>
        {data.map(item=><li onClick={(e)=>clickedProduct(e,item.id)} key={item.id}>{item.title}</li>)}
        </ul>
    </div>
  );
}

export default ProductList;
