import React, { useState } from "react";

function Product(props) {
  // let{product}=props
  // console.log(product)
  let [prod] = useState(props.product);
  let {onAddToClick}=props
  return (
    <div
      className="card p-4 bg-warning"
      style={{ width: "300px", margin: "10px" }}
    >
      {/* <h3>{product.productName}</h3> */}
      <h3>
        <i class="fa-solid fa-arrow-right"></i> {prod.productName}
      </h3>

      <h2 className="text-info">
        <address>${prod.price.toFixed(2)}</address>
      </h2>
      <div className="my d-flex justify-content-evenly text-primary ">
        <h6>
          {/* {" "}      */}
          #{prod?.category?.categoryName}#{prod?.brand?.brandName}
        </h6>
        <h6> #{prod?.brand?.brandName}</h6>
      </div>
      <div className="continer">
        {[...Array(prod.rating).keys()].map((n, index) => {
          return <i class="fa-solid fa-star" key={index}></i>;
        })}
        {[...Array(5 - prod.rating).keys()].map((n, index) => {
          return <i class="fa-regular fa-star" key={index}></i>;
        })}
        <div>
          {prod.isOrdered ? (
            <p className="text-success fw-bolder">Added To Cart!</p> 
          ) : (
            <button onClick={()=>onAddToClick(prod)} className="btn btn-info">Add To Cart</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
