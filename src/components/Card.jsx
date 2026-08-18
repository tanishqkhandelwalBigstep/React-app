import React from 'react'
import { Link } from 'react-router-dom'



const Card = ({ title, image, product , data , setData}) => {
    function deleteCard(e,id){
        e.preventDefault()  
        e.stopPropagation()
        setData(data.filter((item) => item.id !== id))

    }
  return (
    <div  className="product-card">
        <Link to={`/desc/${product.id}`}> View Product</Link>
      <img
        className="card-image"
        src={image}
        alt={title}
      />

      <h2 className="product-card__title">
        {title}
      </h2>

      <button onClick={(e)=>{
        deleteCard(e,product.id)
      }} className='delete-btn'>Delete</button>

      

    </div>
  )
}

export default Card
