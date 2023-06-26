import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardProducts = ({product}) => {

    const navigate = useNavigate()
const handleClick = ()=> {
 navigate(  )
}

  return (
    <article onClick={handleClick}>
        <header>

        <img src={product.images[0].url} alt={product.title} />
        </header>
        <section>
            <header>
                <h3>{product.brand}</h3>
                <h2>{product.title}</h2>
            </header>
            <div>
                <div>Price</div>
                <div>{product.price}</div>
            </div>
            <button><i className='bx bx-cart'></i></button>

        </section>
    </article>
  )
}

export default CardProducts