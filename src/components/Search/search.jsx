import axios from "axios";
import { useEffect, useState } from "react"; 
import Form from 'react-bootstrap/Form';
import { Container, FormControl } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import {MakeUp} from '../MakeUp/Makeup';
import "./search.css";
const Error = ()=>{
    return(
        <Container>
            <span>Not Found</span>
        </Container>
    );
}
export{Error};

const Search = ()=> {
    const[products, setProducts]= useState([]);
    const[searcht, setsearcht]= useState([""]);
    const[error,guardarError] =useState(false);

    const getProducts = () =>{
    axios.get('https://makeup-api.herokuapp.com/api/v1/products.json')
    .then(function (response) {
    
        setProducts(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    }
    const handleSearch = (event)=>{  
        setsearcht(event.target.value);
    }
    useEffect(()=>{
        getProducts()
    },[]);
    useEffect(()=>{
        if(searcht === ""){
            getProducts();
        }
        if(searcht !==""){
            const productFilter= products.filter((product)=>
            product.name.toLowerCase().includes(searcht.toLowerCase())
            );
            setProducts(productFilter);
        }      
    },[searcht]);
    
    return ( 
    <>
    <Container className="container cente">
    <br />
    <span>Search Product</span>
    <FormControl type="text" placeholder="Example Lipstick" className=" input-busqueda container" value={searcht} onChange={handleSearch}/>
    <br />
    </Container>
    <Container className="container">
        <Row>
    {
        products.map((product)=>
            <MakeUp key={product.id} src ={product.image_link} name={product.name} brand={product.brand} price= {product.price} type = {product.product_type}/>
            )}
            </Row>
        </Container>
        
    </>
    
    );        
    
    };

    export default Search;

