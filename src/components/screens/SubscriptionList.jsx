import { useState } from "react";
import { Container } from "react-bootstrap";
import SubscriptionItemBar from "../content/SubscriptionItemBar.jsx";

export default function SubscriptionList() {
    // Example subscriptions array
    const [subscriptions, setSubscriptions] = useState([
        {
            id: 1,
            priority: "High",
            title: "Netflix",
            price: 15.99,
            renewCycleTime: "Monthly",
            renewDate: "Dec. 19",
            color: "red",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
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

    function createSubscription(priority, title) {
        // Implementation for adding a subscription
    }

    return (
        <Container style={{ marginTop: "2rem", marginBottom: "2rem" }} fluid>
            <h1>Your Subscriptions</h1>
            <p>Manage and view all your active subscriptions below.</p>

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