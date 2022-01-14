import './App.css';
import Home from './Components/Home';
import Booking from './Components/Booking';
import TopOfWeek from './Components/TopOfWeek';
import FeaturedList from './Components/FeaturedList';

function App() {
  return (
    <div className="App" >
      <Home />
      <Booking />
      <TopOfWeek />
      <FeaturedList />
    </div>
  );
}

export default App;
