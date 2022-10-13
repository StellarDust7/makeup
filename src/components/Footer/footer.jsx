import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css';
    const Footer = () => {
    return (
        <Container fluid className='footer'>
        <Row className="justify-content">
            <Col  className="col-center "xs={{ order: 'last' }}>Makeup API</Col>
            <Col  className="col-center "xs>Terminos y Condiciones</Col>
            <Col  className="col-center "xs={{ order: 'first' }}>DEVF Module FrontEnd</Col>
        </Row>
        </Container>
    );
    }

export {Footer};