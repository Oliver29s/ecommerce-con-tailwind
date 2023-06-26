import React from 'react'

const ProductInfo = ({product}) => {
  return (
    <article>
        <h3>{product?.brand}</h3>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <footer>
            <section>
                <h4>{price}</h4>
                <span>{product?.price}</span>
                <section>
                    <h4>Quantity</h4>
                </section>
            </section>
        </footer>
    </article>
  )
}

export default ProductInfo