
import './App.css';

import Main from './Pages/Main';
import Product from './Pages/Product/Product';
import Navbar from './Components/Navbar/Navbar';
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Categories from './Pages/Catgories/Categories';
import Error from './Pages/Error/Error';

function App() {
  return (
    <div className="App">
        <Router>
      <section className="navbar-section Nav">
            <Navbar/>
        </section>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/category' element={<Categories/>}/>
        <Route path='*' element={<Error/>} />
      </Routes>
        </Router>
    </div>
  );
}

export default App;
