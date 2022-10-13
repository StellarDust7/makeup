import "./text.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

    const Text = () => {
    return (
        <Container fluid className="text">
        <Row>
            <Col>15%OFF en tu primera compra con el cupón DEVF</Col>
        </Row>
        </Container>
    );
}

export {Text} ;
