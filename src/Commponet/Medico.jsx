import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col, Form, InputGroup, FormControl, Table } from 'react-bootstrap';
import salesInform from './salesInform.json';



const Medico = () => {
  const salesInfo = salesInform;

  return (
    <Container fluid>
      <Row>
        <Col className='side dashboard'>
          <h4>Medico Sales</h4>
          <h5><i className="bi bi-grid"></i> Dashboard</h5>
          <p className='lab'><i class="bi bi-funnel"></i> Lab Test</p>
          <p><i className="bi bi-calendar"></i> Appointment</p>
          <p><i className="bi bi-cart"></i> Medicine Order</p>
          <p><i className="bi bi-envelope"></i> Message</p>
          <p><i className="bi bi-cash"></i> Payment</p>
          <p><i className="bi bi-gear"></i> Settings</p>
          <p className='help'><i className="bi bi-question-circle"></i> help</p>
     


        </Col>

        <Col className='mainBox' xs={10}>

          <Row>
            <Col>
              <InputGroup className="mb-1">
                <FormControl className='searchBox' placeholder="Search"  />   
                            
              </InputGroup>
              <span> <i className="bi bi-bell bell"></i> </span>  
            </Col>
          </Row>
          <Row className='salesinfo'>
            <Col>
              <h4 className='salInfo'>Sales Information</h4>
              <Form>
                <Row className='inputData' >
                  <Col>
                    <Form.Group controlId="customer">
                      <Form.Label>Customer</Form.Label>
                      <Form.Control type="text" placeholder='Enter Customer Name' />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="invoiceID">
                      <Form.Label>Invoice ID</Form.Label>
                      <Form.Control type="text" placeholder='Enter Invoice ID' />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="startDate">
                      <Form.Label>Start Date</Form.Label>
                      <Form.Control type="text" placeholder='Start Date' />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="endDate">
                      <Form.Label>End Date</Form.Label>
                      <Form.Control type="text" placeholder='End Date' />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col className="container mt-5 ">
              <Table>
                <thead>
                  <tr>
                    <th>Invoice ID</th>
                    <th>Date</th>
                    <th>Customer</th>
                    <th>Payable Amount</th>
                    <th>Paid Amount</th>
                    <th>Due Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {salesInfo.map((item, index) => (
                    <tr className='tRow'  key={index}>
                      <td> <i className="bi bi-app"></i>  {item.Invoice.ID}</td>
                      <td>{item.Date}</td>
                      <td>{item.Customer}</td>
                      <td>{item.Payable.Amount}</td>
                      <td>{item.Paid.Amount}</td>
                      <td>{item.Due}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Medico;
