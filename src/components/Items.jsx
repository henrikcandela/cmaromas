import React, {useState} from 'react';

const Item = ({itemTitle, stock}) => {
    
    const [itemsQty, setItemsQty] = useState(0);

    const setRealStock = (qty) => {
       if (qty <= stock) {
         setItemsQty (qty)
       }
    }
   
    const removeFromStock = (qty) => {
     if (qty >= 0) {
       setItemsQty (qty)
     }
   }

  return (
  <>
  <div>
      {itemTitle}
  </div>

  <div>
       <button type="button" class="btn btn-outline-secondary" onClick={ () => removeFromStock (itemsQty - 1)}> - </button>
           <span style={{margin:10 , fontSize: "3rem"}}> {itemsQty} </span>
       <button type="button" class="btn btn-outline-secondary" onClick={ () => setRealStock (itemsQty + 1)}> + </button>
  </div>
  </>
  )
};

export default Item;
