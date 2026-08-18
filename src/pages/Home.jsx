import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

const Home = () => {
  const [title, setTitle] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchdata() {
      const res = await axios.get('https://dummyjson.com/products/')
      setData(res.data.products)
    }

    fetchdata()
  }, [])

  const fetchDataWithQuery = async () => {
    const res = await axios.get(
      `https://dummyjson.com/products/search?q=${title}`
    )

    setData(res.data.products)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    fetchDataWithQuery()
    setTitle('')
  }

  return (
    <div className="app">

      <form className="search-form" onSubmit={submitHandler}>
        <input
          className="search-input"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          type="text"
          placeholder="Search your product"
        />

        <button className="search-button">
          Search
        </button>
      </form>

      <div className="card-container">
        {data.map((elem) => {
          return (
            <Card
              key={elem.id}
              image={elem.images[0]}
              title={elem.title}
              product = {elem}

              data={data}
              setData={setData}
            />
          )
        })}
      </div>

    </div>
  )
}

export default Home