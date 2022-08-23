import { Card, Button } from "react-bootstrap";

const CardView = ({data:{price,image,name,id}}) =>{
    return(
        <Card style={{ width: '18rem' }} id={id}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {price}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default CardView;
