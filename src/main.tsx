import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PageProdutos from './pages/Produtos/index'
import PageNovoProduto from './pages/Produtos/Novo'
import Header from './components/Header/index';
const routes = createBrowserRouter([
  {
    path: '/admin/produtos',
    element: (
      <>
        <Header />
        <PageProdutos />
      </>
    ),

  }, {
    path: '/admin/produtos/novo',
    element: (
      <>
        <Header />
        <PageNovoProduto />
      </>
    )
  }
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
