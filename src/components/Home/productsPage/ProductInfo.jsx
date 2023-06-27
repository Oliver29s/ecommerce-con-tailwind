import React, { useState } from 'react'

const ProductInfo = ({product}) => {

 const [counter, setCounter] = useState(1)

 const handleAdd = () =>{
  setCounter(counter + 1)
 }

 const handleMinus = () =>{
  if(counter - 1 >= 1){
    setCounter(counter - 1)
  }
 
 }

  return (
    <article>
        <h3>{product?.brand}</h3>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <footer>
            <section>
                <h4>price</h4>
                <span>{product?.price}</span>
                <section>
                    <h4>Quantity</h4>
                </section>
                <div>
                  <div onClick={handleMinus}>-</div>
                  <div>{counter}</div>
                  <div onClick={handleAdd}>+</div>
                </div>
            </section>
        </footer>
    </article>
  )
}

export default ProductInfo