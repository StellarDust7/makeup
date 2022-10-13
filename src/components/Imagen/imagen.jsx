import "./imagen.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "./lipstick.jpg";
    const Imagen = () => {
    return (
        <Container fluid className="image">
        <Row>
            <Col className="col"><img src={logo} alt="" className="imag"/>
            <Col className="centrado">LIPSTICK</Col>
            </Col>
        </Row>
        </Container>
    );
}

export {Imagen} ;
