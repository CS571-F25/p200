import { Form, Button, Card, Row, Col } from "react-bootstrap";

/**
 * 
 * @param {string} title
 * @param {string} price
 * @param {string} renewCycleTime
 * @param {string} renewDate
 * @param {string} color
 * @param {string} img
 * @param {function} onSubmit
 * @param {function} onCancel
 * @param {string} textColor
 * 
 * @returns A form to edit an existing subscription's details. 
 */

function EditSubscriptionForm(props) {


    return <div>
        <Card>
            <Card.Body>

                <Form>
                    <Row>
                        <Form.Group className="mb-3" controlId="formTitle">
                            <Form.Label>Current Title: {props.title}</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter new title"
                                defaultValue={props.title}
                                required
                            />
                        </Form.Group>
                    </Row>

                    <Row >
                        <Col>
                            <Form.Group className="mb-3" controlId="formPrice">
                                <Form.Label>Current Price: {props.price}</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter new price"
                                    defaultValue={props.price}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Renewal Cycle</Form.Label>
                                <Form.Select
                                    name="renewCycleTime"
                                    placeholder="Select Renewal Cycle"
                                    defaultValue={props.renewCycleTime}
                                    required
                                >
                                    <option value="Daily">Daily</option>
                                    <option value="Weekly">Weekly</option>
                                    <option value="Monthly">Monthly</option>
                                    <option value="Yearly">Yearly</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Renewal Date</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="renewDate"
                                    placeholder="e.g. Dec. 19"
                                    defaultValue={"Entertainment"}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Category</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="category"
                                    placeholder="e.g. Entertainment"
                                    value={props.category}
                                    
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    </div>
}

export default EditSubscriptionForm;