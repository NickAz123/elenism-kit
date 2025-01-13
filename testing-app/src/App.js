import './App.css';
import TestComponent  from './components/testComponent';
import LandingPage from './components/Landing/landing';
import RSVP from './components/RSVP/rsvp';
import Schedule from './components/Schedule/schedule'

function App() {
  return (
    <div className="App">
     <LandingPage />
     <RSVP/>
     <Schedule/>
    </div>
  );
}

export default App;
