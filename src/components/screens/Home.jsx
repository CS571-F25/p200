import SubscriptionItemBar from "../content/SubscriptionItemBar";

export default function Home() {
    return (
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem" }}>
            <h1>Welcome to SubTracker</h1>
            <p>
                SubTracker helps you manage and track all your subscriptions in one place.
                Stay on top of renewal dates, costs, and never miss a payment again!
            </p>
            <ul>
                <li>View and organize your active subscriptions</li>
                <li>Track renewal cycles and upcoming charges</li>
                <li>Analyze your monthly spending</li>
                <li>Customize subscription priorities and categories</li>
                <li>And much more!</li>
            </ul>
            <hr />
            <h2>Example Subscription</h2>
            <SubscriptionItemBar
                priority={1}
                color="red"
                imgUrl="https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940"
                title="Netflix"
                price={25}
                renewCycleTime="Every Month"
                renewDate="Dec. 19"
            />
        </div>
    );
}