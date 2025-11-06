import { HashRouter, Route, Routes } from 'react-router'
import './App.css'

import Home from './components/Home'
import SubscriptionList from './components/SubscriptionList'
import AboutMe from './components/AboutMe'

function App() {
  return <HashRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/subscriptions" element={<SubscriptionList />}></Route>
      <Route path="/about" element={<AboutMe />} />
    </Routes>
  </HashRouter>
}

export default App
