import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import "./makeup.css";
import {Modales} from '../Modal/modal';




const MakeUp = ({id, name,src,brand, price, type}) =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


return (
<>
<Card key={id} style={{ width: '16rem' }} className="separa-card">
    <Card.Img variant="top" src={src} alt={name}/>
    <Card.Body>
    <Card.Title className='title'>{name}</Card.Title>
    </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item className='txt'>Marca:  {brand}</ListGroup.Item>
        <ListGroup.Item className='txt'>Tipo:  {type}</ListGroup.Item>
        <ListGroup.Item className='txt'>${price}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
    <Button size="lg" className='bot' onClick={handleShow}>
        Ver Descripcion
    </Button>
    </Card.Body>
</Card>
<Modales show={show} handleClose={handleClose}/>
</>     
);
}
export {MakeUp};

