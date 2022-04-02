import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Details from './components/Details';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <div className='main'>
          <Routes>
            <Route path='/' element = {<Home />}/>
            <Route path='/about' element = {<About />}/>
            <Route path='/products' element = {<Products />}/>
            <Route path='/details/:id' element = {<Details />}/>
            <Route path='/checkout' element = {<Checkout />}/>
            <Route path='*' element = {<NotFound />}/>
          </Routes>
          </div>
          <Footer />
        </Router>
        
    </div>
  );
}

export default App;
