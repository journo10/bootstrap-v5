import React from 'react'
import { useState } from 'react'
import { data } from '../data'

const Products = () => {
  const [card, setCard] = useState(data);
  return (
    <div className='container mt-5'>
      <h1 className='text-danger text-center mb-3'>Ürünlerimiz</h1>
      <div className="row">
        {card.map((c) => (
          <div className="col-sm-4 mb-3" key={c.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={c.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{c.title}</h5>
                <span className="card-text bg-success p-1 text-white rounded">{c.price} $</span>
              </div>
            </div>
          </div>
          )
        )}
      </div>
    </div>
  )
}

export default Products