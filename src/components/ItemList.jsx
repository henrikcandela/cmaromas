import Item from "./Item";

const ItemList = ({products}) => {
    return (
      <>
        {products.map((product) => (
            <div key={product.id}>
                <Item key={product.id} product={product} />
            </div>
        ))}
      </>
    )
}

export default ItemList;