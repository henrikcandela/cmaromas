import { useState, useEffect, useMemo } from "react";

const Item = ({ product }) => {
    const {id, title, thumbnail, attributes, price} = product
    const [cleanAttributes, setCleanAttributes] = useState([])
    const whiteListAttributes = useMemo(() =>  ["Marca", "Modelo"], []);

    const filterAttributes = () => {
        let newAttributes = attributes.filter(attribute => whiteListAttributes.includes(attribute.name))
        setCleanAttributes(newAttributes)
    }
    useEffect(filterAttributes, [attributes, whiteListAttributes])

    const goToProduct = () => {
        navigate(`/product/${id}`)
    }
    
    return (
        <Card >
            <Card.Img style={{ marginTop: 10, height: '110px', with: "100%", objectFit: "contain" }} variant="top" src={thumbnail} />
            <Card.Body style={{ textAlign: "left" }}>
                <Card.Text style={{ height: 40 }}>
                    {title}
                </Card.Text>
                <Card.Title>
                    ${price}
                </Card.Title>          
            </Card.Body>              
            <Card.Header>Detalles</Card.Header>            
            <ListGroup variant="flush">
                {cleanAttributes.map( (attribute, index) => {
                    return <ListGroup.Item key={index}>{attribute.name} {attribute.value_name}</ListGroup.Item>
                })}
            </ListGroup>             
            <Button variant="primary" onClick={ () => goToProduct()}>Ver detalle del producto</Button>                
        </Card> 
    )
}

export default Item;