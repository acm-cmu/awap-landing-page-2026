import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import EventDetails from "./components/EventDetails";
import Past from "./components/Past";
import Sponsors from "./components/Sponsors";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <EventDetails />
      <About />
      <Past />
      <Sponsors />
    </div>
  );
}

export default App;

// runs only after entire window loads
window.onload = function changeMobileText() {
  // changes past challenge button text if user is on mobile
  if (navigator.userAgent.match(/Mobile/)) {
    document.getElementById("year2022").innerHTML = "2022";
    document.getElementById("year2021").innerHTML = "2021";
    document.getElementById("year2019").innerHTML = "2019";
  }
};
