import "./shadow.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "./home1.jpg";
    const Shadow = () => {
    return (
        <Container fluid>
        <Row>
            <Col className="div-img"><img src={logo} alt="" className="imag"/>
            </Col>
        </Row>
        </Container>
    );
}

export {Shadow} ;