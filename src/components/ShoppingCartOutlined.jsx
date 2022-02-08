import React, {Component, useState} from 'react'


const ShoppingCartOutlined = () => {
    return (
        <div>      
        </div>
    )
}

export default ShoppingCartOutlined



function Itemlistcontainer () {
    return <ul>
    {Itemlist.map (u => <li> {u} </li>)}
    </ul>
}