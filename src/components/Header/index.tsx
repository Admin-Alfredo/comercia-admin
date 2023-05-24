import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'
export default function Header() {
  return (
    <header className="container">
      <div className="header-left">
        <div className="logo">
          <img src="/shop-logo.png" width={40} />
          <span>COMERCIA</span>
        </div>
      </div>
      <div className="header-right">
        {/* <div> */}
          <div className="nav-link" title='lista de produtos'>
            <Link to="/admin/produtos" className="Link">PRODUTOS</Link>
          </div>
          <div className="nav-link" title='produtos visivel para o usuario'>

            <Link to="/admin/produtos" className="Link">NA LOJA</Link>
          </div>

          <div className="nav-link" title='produtos esgotados no estoque'>
            <Link to="/admin/produtos" className="Link">ESGOTADOS</Link>
          </div>

          <div className="nav-link"  title='adicionar novo produto'>
            <Link to="/admin/produtos/novo" className="Link">ADD PRODUTOS</Link>
          </div>


        {/* </div> */}
      </div>
    </header>
  )
}
