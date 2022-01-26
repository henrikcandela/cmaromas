import React from 'react';
import './App.css';

// Navbar
import Navbar from './components/Navbar';

import { ShoppingCartOutlined } from '@ant-design/icons'; // Desafio componentes I

import Itemcount from './components/Itemcount'; // Desafio componentes II

import { useState, useEffect } from 'react';
import { getProductsFromCategory } from './components/Products';
import ItemList from './components/ItemList';
import Item from './components/Item';


function App() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let mounted = true
    setLoading(true) 
    getProductsFromCategory("MLA", "MLA1055").then(items => {
      if(mounted) {
        console.log(items.results)
        setProducts(items.results)
        setTimeout(() => {
          setLoading(false)
        }, 2000)
      }
    })

   return () => mounted = false;
  }, 
  [])

 


  return (
    <div className="App">
      <Navbar/>
      <ShoppingCartOutlined />
      <Itemcount/>

      <ItemList products={products} />






      <header className="App-header"> </header>
    </div>
  );
}

export default App;
