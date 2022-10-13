import { useState, useEffect} from "react";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import {Modales } from "./modal";

const ModalInfo = ()=> {
    const [artists, setArtists] = useState([]);

    useEffect(()=> {
        axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Natural&product_type=eyeshadow')
    .then(response => {
    const artistData = response.data;
    setArtists(artistData);
    console.log(response.data);
    })
    .catch(error => {
    console.log(error);
    }) 

    },[]);

    return (
        <>
        <Container className="container containe">
            <Row>
                
            {
                artists.map( artist =>{
                    return <Modales key={artist.id} name={artist.name} descrip = {artist.description} ></Modales>
                    
                })
            }
            
            </Row>
        </Container>
        </>
    )
}
export {ModalInfo};