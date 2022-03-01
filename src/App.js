import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Banner from './Components/Pages/Banner/Banner';
import Stats from './Components/Pages/Statistics/Statistic'
import Boost from './Components/Pages/Boost/Boost';
import Footer from './Components/Pages/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Banner/>
        <Stats/>
        <Boost/>
        <Footer/>
    </div>
  );
}

export default App;
