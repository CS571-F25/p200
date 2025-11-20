import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles

export default function CalendarTab() {
    const [date, setDate] = useState(new Date()); // State to track the selected date

    // Function to handle date changes
    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <div style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
            <h1>Subscription Calendar</h1>
            <p>
                Use the calendar below to view when your subscriptions are set to renew.
                Days with renewals will be highlighted in the future.
            </p>
            <Calendar
                onChange={handleDateChange}
                value={date}
                tileContent={({ date, view }) => {
                    // Example: Highlight specific dates (you can customize this)
                    const exampleRenewalDates = ["2025-12-19", "2025-12-25", "2026-01-05"];
                    const formattedDate = date.toISOString().split("T")[0];
                    if (exampleRenewalDates.includes(formattedDate)) {
                        return <div style={{ color: "red", fontWeight: "bold" }}>●</div>;
                    }
                }}
            />
            <p style={{ marginTop: "1rem" }}>
                <strong>Selected Date:</strong> {date.toDateString()}
            </p>
        </div>
    );
}