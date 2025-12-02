import { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import SubscriptionItemBar from "../content/SubscriptionItemBar.jsx";
import SubscriptionInputForm from "../content/SubscriptionInputForm.jsx";

export default function SubscriptionList() {
    const [subscriptions, setSubscriptions] = useState([
        {
            id: 1,
            priority: "High",
            title: "Netflix",
            price: 15.99,
            renewCycleTime: "Monthly",
            renewDate: "Dec. 19",
            color: "red",
            textColor: "white",
            imgUrl: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940"
        },
        {
            id: 2,
            priority: "Medium",
            title: "Spotify",
            price: 9.99,
            renewCycleTime: "Monthly",
            renewDate: "Dec. 25",
            color: "green",
            textColor: "white",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
        },
        {
            id: 3,
            priority: "Low",
            title: "Disney+",
            price: 7.99,
            renewCycleTime: "Monthly",
            renewDate: "Jan. 5",
            color: "blue",
            textColor: "white",

            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg"
        }
    ]);

    const [isEditing, setIsEditing] = useState(false);
    const [isCreating, setIsCreating] = useState(true);
    const [isSearching, setIsSearching] = useState(false);

    const [imgUrl, setImgUrl] = useState("");
    const [title, setTitle] = useState("");
    const [renewCycleTime, setRenewCycleTime] = useState("");
    const [renewDate, setRenewDate] = useState("");
    const [price, setPrice] = useState("");
    const [color, setColor] = useState("");
    const [textColor, setTextColor] = useState("");


    return (
        <Container fluid style={{ height: "100vh", marginTop: "5rem" }}>
            <Row>

                <Col xs={12} md={4} >
                    <Card
                        style={{
                            backgroundColor: "transparent",
                            padding: "1rem",

                        }}>
                        <h1 style={{ backgroundColor: "white", borderRadius: 8, padding: 10, width: 340 }}>{
                            isCreating ? "Add Subscription" : isEditing ? "Edit Subscription" :
                                isSearching ? "Search Subscriptions" : "Manage Subscriptions"
                        }</h1>
                        {isCreating ? <>
                            <SubscriptionInputForm setIsCreating={setIsCreating} setSubscriptions={setSubscriptions} />
                        </> : <></>}
                        {isEditing ? <></> : <></>}
                        {isSearching ? <></> : <></>}
                    </Card>
                </Col>

                <Col xs={12} md={8}
                    style={{
                        backgroundColor: "transparent",
                        borderRadius: 10,
                        padding: "1rem",
                    }}>
                    <h1 style={{ backgroundColor: "white", borderRadius: 8, padding: 10, width: 340 }}>My Subscriptions:</h1>
                    {/* TODO: create addsubscriptionbar, when pressed, sets IsCreating state var, changes side to create Subscription*/}
                    {subscriptions && subscriptions.map((sub) => (
                        <SubscriptionItemBar
                            key={sub.id}
                            priority={sub.priority}
                            title={sub.title}
                            price={sub.price}
                            renewCycleTime={sub.renewCycleTime}
                            renewDate={sub.renewDate}
                            color={sub.color}
                            textColor={sub.textColor}
                            imgUrl={sub.imgUrl}
                            setSubs={setSubscriptions}
                        />
                    )) || <><p>Loading...</p></>}
                </Col>
            </Row>
        </Container>
    );
}