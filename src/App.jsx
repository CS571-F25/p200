import { HashRouter, Route, Routes, Link } from 'react-router';
import { Navbar, Nav, Container } from 'react-bootstrap';

import './App.css';

import Home from './components/screens/Home';
import SubscriptionList from './components/screens/SubscriptionList';
import AboutMe from './components/screens/AboutMe';
import CalendarTab from './components/screens/CalendarTab'; // Import the new CalendarTab

function App() {
  return (
    <HashRouter>
      {/* Primary navigation bar */}
      <Navbar bg="dark" variant="dark" fixed="top" expand="sm" collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to="/">
            SubTracker
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/subscriptions">
                Subscriptions
              </Nav.Link>
              <Nav.Link as={Link} to="/calendar">
                Calendar
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About Me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Page content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subscriptions" element={<SubscriptionList />} />
        <Route path="/calendar" element={<CalendarTab />} /> {/* Add CalendarTab route */}
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
