import { Card, Row, Col } from "react-bootstrap";
import { memo, useState } from "react";

/**
 * 
 * @param {int} props.priority -> priority of subscription, how to sort.
 * @param {string/hex} props.color -> background color.
 * @param {string/hex} props.textColor -> text color.
 * @param {string} props.imgUrl -> url for subscription image.
 * @param {string} props.title -> title of subscription (main name).
 * @param {int} props.price -> price of subscription every cycle.
 * @param {string} props.renewCycleTime -> how often it renews.
 * @param {string} props.renewDate -> when the next renewal is.
 * @param {string} props.category -> what category the subscription is (entertainment/utility).
 * @param {CallbackFunction} props.setSubs -> setSubscriptionsStateVariable
 * 
 * @returns A formatted bar of subscription information
 *  that will get organized by the subscription list
 */
function SubscriptionItemBar(props) {

    const [viewingMore, setViewingMore] = useState(false)

    return (

        <Card
            className="subItem"
            style={{
                backgroundColor: props.color,
                minHeight: 100,
                minWidth: "50vw",
                marginBottom: 8,
                maxWidth: "100%",
                borderColor: "black",
                borderWidth: 4
            }}
        >
            <Card.Body>
                <Row style={{ alignItems: "center" }}>
                    <Col xs lg="2">
                        {props.imgUrl && (
                            <img
                                style={{
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

                    <Col>
                        <a
                            onClick={() => setViewingMore(!viewingMore)}
                            className="stretched-link"
                            style={{
                                textDecoration: "none",
                                color: props.textColor,
                                fontWeight: "bold",
                                fontSize: 40,
                            }}
                        >
                            {props.title}
                        </a>
                    </Col>

                    <Col>
                        <div style={{ fontSize: 30, color: props.textColor, textAlign: "right" }}>
                            ${props.price}
                        </div>
                    </Col>
                </Row>

                {viewingMore ? <>
                    <div style={{width: "56vw", height: 2, backgroundColor: "black", marginBottom: 5, marginTop: 10}}></div>
                    <Row>
                        <Col>
                            <div style={{ color: props.textColor, fontSize: 20 }}>
                                Renews: {props.renewCycleTime} on {props.renewDate}
                            </div>
                        </Col>
                        <Col style={{ textAlign: "right" }}>

                        </Col>
                    </Row> </>: <div></div>}
            </Card.Body>


        </Card>
    );
}

export default memo(SubscriptionItemBar);