import { Card, Row, Col } from "react-bootstrap";
import { memo } from "react";

/**
 * 
 * @param {int} props.priority -> priority of subscription, how to sort.
 * @param {string/hex} props.color -> background color.
 * @param {string} props.imgUrl -> url for subscription image.
 * @param {string} props.title -> title of subscription (main name).
 * @param {int} props.price -> price of subscription every cycle.
 * @param {string} props.renewCycleTime -> how often it renews.
 * @param {string} props.renewDate -> when the next renewal is.
 * 
 * @returns A formatted bar of subscription information
 *  that will get organized by the subscription list
 */
function SubscriptionItemBar(props) {

    return (
        <Card style={{ backgroundColor: props.color, marginBottom: "1rem", width: "600px", height: "100%" }}>
            <Card.Body>
                <Row style={{ alignItems: "center" }}>
                    {/* Left: smaller image */}
                    <Col xs="auto">
                        {props.imgUrl && (
                            <img
                                style={{
                                    height: "60px",
                                    width: "60px",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    borderRadius: "8px"
                                }}
                                src={props.imgUrl}
                                alt={`${props.title} logo`}
                            />
                        )}
                    </Col>

                    {/* Middle: title */}
                    <Col>
                        <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>{props.title}</div>
                    </Col>

                    {/* Right: renew period + date */}
                    <Col xs="auto" style={{ textAlign: "right" }}>
                        <div style={{ fontSize: "0.9rem" }}>{`Renews ${props.renewCycleTime}`}</div>
                        <div style={{ fontSize: "0.9rem" }}>{`Next: ${props.renewDate}`}</div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default memo(SubscriptionItemBar);