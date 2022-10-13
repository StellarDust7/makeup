import { useState, useEffect} from "react";
import axios from 'axios';
import { MakeUp} from "../MakeUp/makeup";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "../Shadow/album.css";
import {Footer} from '../Footer/footer';
import {ImagenHome} from './imagenHome';
import { SubText } from "../SubText/subtext";

const Home = ()=> {
    const [artists, setArtists] = useState([]);

    useEffect(()=> {
        axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner')
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
        <ImagenHome/>
        <SubText/>
        <Container className="container containe">
            <Row>
                
            {
                artists.map( artist =>{
                    return <MakeUp key={artist.id} src ={artist.image_link} name={artist.name} brand={artist.brand} price= {artist.price} type = {artist.product_type}></MakeUp>
                    
                })
            }
            
            </Row>
        </Container>
        <Footer/>
        </>
    )
}
export {Home};