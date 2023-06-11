import { Button } from 'bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      
     
      <Navbar bg="primary" variant="dark">
        <Container style={{marginLeft:"10%"}}>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto" style={{marginLeft:"10%"}}>
            <Nav.Link href="/sparkLines">SparkLines</Nav.Link>
            <Nav.Link href="/lineChart">LineChart</Nav.Link>
            <Nav.Link href="/barChart">BarChart</Nav.Link>
            <Nav.Link href="/pieChart">Accordions</Nav.Link>
            <Nav.Link href="/table">TableDropdown</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/data-grid">Data Grid</Nav.Link>
            <Nav.Link href="/download">Download</Nav.Link>
            <Nav.Link href="/excel">Excel</Nav.Link>

          </Nav>
        </Container>
      </Navbar>

      <br />
     
    </>
  );
}

export default ColorSchemesExample;