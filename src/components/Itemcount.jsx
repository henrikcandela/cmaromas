import React, { useState } from 'react';


const Itemcount = () => {

 const [itemsQty, setItemsQty] = useState(0);

 return <div>
      <button type="button" class="btn btn-outline-secondary" onClick={ () => setItemsQty (itemsQty - 1)}> - </button>
      <span style={{margin:10 , fontSize: "3rem"}}> {itemsQty} </span>
      <button type="button" class="btn btn-outline-secondary" onClick={ () => setItemsQty (itemsQty + 1)}> + </button>

  </div>;
};

export default Itemcount;

