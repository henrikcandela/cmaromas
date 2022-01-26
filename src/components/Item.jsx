import React, { useState } from 'react';


const Item = ({id, title, description, price, prictureUrl, stock}) => {
    const [itemsQty, setItemsQty] = useState(0);

    const setRealStock = (qty) => {
        if (qty <= stock) {
            setItemsQty(qty)
        } 
    }

    const removeFromStock = (qty) => {
        if (qty >= 0) {
            setItemsQty(qty)
        }
    }

  return <div>
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="..."> {prictureUrl} </img>
            <div class="card-body">
                <h5 class="card-title"> {title} </h5>
                <p class="card-text"> {description}</p>
            </div>

            <ul class="list-group list-group-flush">
                <li class="list-group-item"> {id} </li>
                <li class="list-group-item">{stock}</li>
                <li class="list-group-item">{price}</li>
            </ul>

            <div class="card-body">
                <>
                    <div style={{ marginBottom: 10}}>
                        <button type="button" class="btn btn-secondary" onClick={ () => removeFromStock (itemsQty - 1 ) } variant="primary">-</button>           
                        <span style={{  margin: 10, fontSize: "3rem" }}>{itemsQty}</span>
                        <button type="button" class="btn btn-secondary" onClick={ () => setRealStock (itemsQty + 1 ) } variant="primary">+</button>
                    </div>    
          
                </>
            </div>
        </div>
    </div>  
};

export default Item;

