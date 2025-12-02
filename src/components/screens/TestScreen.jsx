import { Container, Row, Col, Card } from "react-bootstrap"

import "./TestScreen.css"

export default function TestScreen() {

    return (
  <Container
    fluid
    style={{
      backgroundColor: "grey",
    }}
  >
    <Row style={{width:"100%"}}>
      <Col xs={12} sm={12} md={4} lg={4}>
        <Card style={{ backgroundColor: "lightblue" }}>
          <h1>fillupentirescreenfillupentirescreenfillupentirescreenfillupentirescreenfillupentirescreen</h1>
        </Card>
      </Col>
      <Col xs={12} sm={12} md={8} lg={8}>
        <Card style={{ backgroundColor: "lightblue" }}>
          <h1>fillupentirescreenfillupentirescreenfillupentirescreenfillupentirescreenfillupentirescreenfillupentirescreen</h1>
        </Card>
      </Col>
    </Row>
  </Container>
);

}