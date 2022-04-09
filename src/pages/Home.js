import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className='container '>
      <div className="row">
        <h1 className='text-danger text-center mt-5'>Merhaba !!!</h1>
        <p className="text-center px-5">Müzik Dükkanım sitemize hoş geldiniz!
          Bu sitede çeşitli müzik aletlerini bulabilirsiniz. Uygun fiyatlarımız ve kaliteli ürünlerimiz için
          <Link to="/products" className='link text-danger'> Ürünlerimiz</Link> sayfamızı ziyaret edebilirsiniz.
        </p>
        <hr />
        <p className="text-center text-danger">Sitemizde bulunan müzik aletleri</p>
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col-sm">
              <ul>
                <li>Gitar</li>
                <li>Davul</li>
                <li>Piyano</li>
                <li>Keman</li>
              </ul>
              <Link to="/about" className='btn btn-primary btn-sm'>Hakkımızda</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home