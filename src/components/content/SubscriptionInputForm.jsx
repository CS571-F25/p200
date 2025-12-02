import { useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";


export default function SubscriptionInputForm(props) {
    const [formData, setFormData] = useState({
        title: "",
        renewCycleTime: "",
        renewDate: "",
        price: "",
        category: "",
        priority: 5,
        textColor: "#000000",
        color: "#ffffff"
    });

    const [previewImage, setPreviewImage] = useState(null);

    console.log("Form Data:", formData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting form with data:", formData);

        props.setSubscriptions((prev) => [
            ...prev,
            {
                id: Date.now(),
                imgUrl: previewImage,
                title: formData.title,
                renewCycleTime: formData.renewCycleTime,
                renewDate: formData.renewDate,
                price: parseFloat(formData.price),
                color: formData.color,
                textColor: formData.textColor,
                priority: formData.priority,
                category: formData.category,
            },
        ]);

        setFormData({
            title: "",
            renewCycleTime: "",
            renewDate: "",
            price: "",
            category: "",
            priority: 5,
            textColor: "#000000",
            color: "#ffffff",
        });
        setPreviewImage(null);

        props.setIsCreating(false);
    };



    return (
        <Card className="mb-4">
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    placeholder="Subscription Name"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="price"
                                    min="0"
                                    step="0.01"
                                    placeholder="9.99"
                                    value={formData.price}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Renewal Cycle</Form.Label>
                                <Form.Select
                                    name="renewCycleTime"
                                    value={formData.renewCycleTime}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="Daily">Daily</option>
                                    <option value="Weekly">Weekly</option>
                                    <option value="Monthly">Monthly</option>
                                    <option value="Yearly">Yearly</option>
                                </Form.Select>

                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Renewal Date</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="renewDate"
                                    placeholder="e.g. Dec. 19"
                                    value={formData.renewDate}
                                    onChange={handleChange}
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
                                    value={formData.category}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Priority</Form.Label>
                                <Form.Select
                                    name="priority"
                                    value={formData.priority}
                                    onChange={handleChange}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>


                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Subscription Image</Form.Label>
                                <Form.Control
                                    type="file"
                                    id="imageUpload"
                                    name="imageUpload"
                                    accept="image/*"
                                    placeholder="Paste image URL"
                                    value={formData.img}
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        console.log("Selected file:", file);
                                        if (file) {
                                            const imageUrl = URL.createObjectURL(file);
                                            setPreviewImage(imageUrl);
                                        }
                                    }}
                                />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <p>Preview:</p>
                            <img style={{
                                width: "60px",
                                objectFit: "cover",
                                objectPosition: "center",
                                borderRadius: "8px"
                            }} src={previewImage && previewImage || <></>}></img>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Background Color</Form.Label>
                                <Form.Control
                                    type="color"
                                    name="color"
                                    value={formData.color}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Text Color</Form.Label>
                                <Form.Control
                                    type="color"
                                    name="textColor"
                                    value={formData.textColor}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>

                    </Row>
                    <div className="d-flex gap-2">
                        <Button type="submit" variant="success">
                            Add Subscription
                        </Button>
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={() => {
                                setShowForm(false);
                            }}
                        >
                            Cancel
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
}