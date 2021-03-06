import React from 'react';
import Item from './Item';

const ItemDetail = ({products}) => {
    return (
        <>
            {products.map((product) => (
                <Col key={product.id}>
                    <Item key={product.id} product={product} />
                </Col>
            ))}
        </>
    )
}

export default ItemDetail;
