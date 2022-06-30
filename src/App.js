// import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
// import ProductDetails from './components/ProductDetails';
import ProductListing from './components/ProductListing';
import ProductComponent from './components/ProductComponent';
import FavoredProductPage from './components/FavoredProductPage'
import ErrorPage from './components/ErrorPage'

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element = {<ProductListing />} />
          <Route path="/favored" element = {<FavoredProductPage />} />
          {/* <Route path="/product/:id" element = {<ProductDetails />} /> */}
          <Route path="/ProductComponent" element = {<ProductComponent />} />
          <Route path="*" element = {<ErrorPage />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
