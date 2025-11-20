import { useState } from "react";
import { Card, Row, Col, Form, Button } from "react-bootstrap";

export default function SubscriptionInputForm({ onSubmit }) {
    const [imgUrl, setImgUrl] = useState("");
    const [title, setTitle] = useState("");
    const [renewCycleTime, setRenewCycleTime] = useState("");
    const [renewDate, setRenewDate] = useState("");
    const [price, setPrice] = useState(""); // Add price state

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit && onSubmit({ imgUrl, title, renewCycleTime, renewDate, price });
        setImgUrl("");
        setTitle("");
        setRenewCycleTime("");
        setRenewDate("");
        setPrice(""); // Reset price
    }

    return (
        <Card style={{ marginBottom: "1rem", maxWidth: "1000px" }}>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Row className="align-items-center">
                        <Col xs="auto">
                            {imgUrl ? (
                                <img
                                    src={imgUrl}
                                    alt="Preview"
                                    style={{
                                        height: "60px",
                                        width: "60px",
                                        objectFit: "cover",
                                        borderRadius: "8px"
                                    }}
                                />
                            ) : (
                                <div
                                    style={{
                                        height: "60px",
                                        width: "60px",
                                        background: "#eee",
                                        borderRadius: "8px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#aaa"
                                    }}
                                >
                                    Img
                                </div>
                            )}
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    placeholder="Subscription Name"
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Renewal Cycle</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={renewCycleTime}
                                    onChange={e => setRenewCycleTime(e.target.value)}
                                    placeholder="e.g. Monthly"
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Renewal Date</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={renewDate}
                                    onChange={e => setRenewDate(e.target.value)}
                                    placeholder="e.g. Dec. 19"
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    value={price}
                                    onChange={e => setPrice(e.target.value)}
                                    placeholder="e.g. 9.99"
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col xs="auto">
                            <Form.Group>
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control
                                    style={{maxWidth: '100px'}}
                                    type="text"
                                    value={imgUrl}
                                    onChange={e => setImgUrl(e.target.value)}
                                    placeholder="Paste URL"
                                />
                            </Form.Group>
                        </Col>
                        <Col xs="auto">
                            <Button type="submit" variant="primary">
                                Add
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
}