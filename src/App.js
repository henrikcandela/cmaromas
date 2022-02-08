import React, { useEffect, useState } from 'react';
import './App.css';


import Navbar from './components/Navbar'; // Navbar 

import Itemcount from './components/Itemcount'; // Desafio componentes II

import ItemList from './components/ItemList'; // Desafio promise y maps 
import Item from './components/Items'; // Desafio promise y maps 

import ItemDetailContainer from './components/ItemDetailContainer'; //Desafio consumiendo apis
import { getProductsFromCategory } from './components/services/Products';



function App() {

  /*
    const [items , setItems] = useState ([ 
      { id: 1, title: "Vela Grand", description: "Vela de cera de soja modelo Grand", price: 1050, stock: 10 },
      { id: 2, title: "Vela Petit", description: "Vela de cera de soja modelo Petit", price: 750, stock: 8},
      { id: 3, title: "Vela Dúo", description: "Vela de cera de soja modelo Dúo", price: 1300, stock: 5}
  ]) */

  const [products, setProducts] = useState ([])

  useEffect ( () => { 
    let mounted = true 
    getProductsFromCategory ("MILA1055").then (items => {
      if (mounted) {
        console.log (items.results)
        setProducts (items.results)
      }
    })
    return () => mounted = false; 
  })

  return (
    <div className="App">
      <Navbar/>
      <ItemDetailContainer products = {products}/>

       {/* <h2> Mi Carrito </h2>
         <div>
        {items.map (item => {
          return <Item itemTitle = {item.title}/>
        })} </div> */}


      <header className="App-header"> </header>
    </div>
  );
}

export default App;
