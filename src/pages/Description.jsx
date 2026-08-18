import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Description = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    async function fetchProduct() {
      const res = await axios.get(`https://dummyjson.com/products/${id}`)
      console.log(res.data)
      setProduct(res.data)
    }

    fetchProduct()
  }, [id])

  if(!product)
      return <h1>Finding details</h1>

  return (
    <div className="app">
      <Link className="desc-back" to="/">← Back to products</Link>

      <div className="desc">
        <div className="desc-gallery">
          <img
            className="desc-image"
            src={product.images[0]}
            alt={product.title}
          />
        </div>

        <div className="desc-info">
          <h1 className="desc-title">{product.title}</h1>
          <p className="desc-brand">{product.brand} · {product.category}</p>

          <p className="desc-price">
            ${product.price}
            {product.discountPercentage ? (
              <span className="desc-discount">
                -{product.discountPercentage}%
              </span>
            ) : null}
          </p>

          <p className="desc-rating">⭐ {product.rating} · {product.stock} in stock</p>

          <p className="desc-description">{product.description}</p>

          <ul className="desc-meta">
            {product.sku ? <li><strong>SKU:</strong> {product.sku}</li> : null}
            {product.weight ? <li><strong>Weight:</strong> {product.weight}</li> : null}
            {product.warrantyInformation ? (
              <li><strong>Warranty:</strong> {product.warrantyInformation}</li>
            ) : null}
            {product.shippingInformation ? (
              <li><strong>Shipping:</strong> {product.shippingInformation}</li>
            ) : null}
            {product.returnPolicy ? (
              <li><strong>Returns:</strong> {product.returnPolicy}</li>
            ) : null}
            {product.availabilityStatus ? (
              <li><strong>Availability:</strong> {product.availabilityStatus}</li>
            ) : null}
          </ul>

          {product.tags?.length ? (
            <div className="desc-tags">
              {product.tags.map((tag) => (
                <span key={tag} className="desc-tag">{tag}</span>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {product.reviews?.length ? (
        <div className="desc-reviews">
          <h2>Reviews</h2>
          {product.reviews.map((review, i) => (
            <div key={i} className="desc-review">
              <p className="desc-review__head">
                <strong>{review.reviewerName}</strong> · ⭐ {review.rating}
              </p>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default Description
