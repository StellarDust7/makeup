import "./imagenHome.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "./home.jpg";
    const ImagenHome = () => {
    return (
        <Container fluid className="image">
        <Row>
            <Col className="col"><img src={logo} alt="" className="imag"/>
            <Col className="centrad">welcome to the </Col>
            <Col className="centra">beauty-verse</Col>
            <Col className="centralizado">SHOP NOW</Col>
            </Col>
        </Row>
        </Container>
    );
}

export {ImagenHome} ;