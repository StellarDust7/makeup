import { useState, useEffect} from "react";
import axios from 'axios';
import { MakeUp} from "../MakeUp/makeup";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "../Shadow/album.css";
import { SubTextShadow } from '../SubText/subtext-shadow';


const Foundation = ()=> {
    const [artists, setArtists] = useState([]);

    useEffect(()=> {
        axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?product_category=concealer&product_type=foundation')
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
        <SubTextShadow/>
        <Container className="container containe">
            <Row>
                
            {
                artists.map( artist =>{
                    return <MakeUp key={artist.id} src ={artist.image_link} name={artist.name} brand={artist.brand} price= {artist.price} type = {artist.product_type}></MakeUp>
                    
                })
            }
            
            </Row>
        </Container>
        </>
    )
}
export {Foundation};