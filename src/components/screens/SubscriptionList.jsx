import { useState } from "react";
import { Container } from "react-bootstrap";
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
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg"
        }
    ]);

    function createSubscription({ imgUrl, title, renewCycleTime, renewDate }) {
        const newSubscription = {
            id: Date.now(), // unique id
            priority: "Medium", // default priority, you can add a field to the form if needed
            title,
            price: 0, // default price, you can add a field to the form if needed
            renewCycleTime,
            renewDate,
            color: "gray", // default color, or let user pick
            imgUrl
        };
        setSubscriptions(subs => [...subs, newSubscription]);
    }

    return (
        <Container style={{ marginTop: "2rem", marginBottom: "2rem", alignItems: "center", display: "flex", flexDirection: "column" }}>
            <h1>Your Subscriptions</h1>
            <p>Manage and view all your active subscriptions below.</p>

            <SubscriptionInputForm onSubmit={createSubscription} />

            {subscriptions.map(sub => (
                <SubscriptionItemBar
                    key={sub.id}
                    priority={sub.priority}
                    title={sub.title}
                    price={sub.price}
                    renewCycleTime={sub.renewCycleTime}
                    renewDate={sub.renewDate}
                    color={sub.color}
                    imgUrl={sub.imgUrl}
                />
            ))}
        </Container>
    );
}