import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './WebPage/Main';
import Home from './WebPage/Home';
import Product from './WebPage/Product';
import Contact from './WebPage/Contact';
import Nopage from './WebPage/Nopage';
import SignUp from './WebPage/SignUp';
import SignIn from './WebPage/SignIn';
import Cart from './WebPage/Cart';
import ProductPage from './WebPage/ProductPage';








function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Routes>
         <Route path="/" element={<Main/>}>
         <Route index element={<Home/>}/>
         <Route path="product" element={<Product/>}/>
         <Route path="product/:id" element={<ProductPage />} />
         <Route path="contact" element={<Contact/>}/>
         <Route path="signup" element={<SignUp/>} />
         <Route path="signin" element={<SignIn/>} />
         <Route path="cart" element={<Cart/>} />
         <Route path="*" element={<Nopage/>} />
        </Route>
        </Routes>
        </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
