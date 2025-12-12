import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Compontes/navbar/Navbar';
import Contectus from "./page/Countectus/Contectus";
import Aboutus from "./page/aboutus/aboutus";
import Home from "./page/Home/home";
import Items from "./page/Items/items";
import Footer from "./Compontes/Footer/footer";
import Detailpage from "./page/detailpage/detail";
import CartPage from "./page/cart/cart";
import { createContext, useState } from "react";
import UserProfile from "./page/user/user";
import Checkout from "./page/checkout/checkout";
import Checkoutp from "./page/Checkout2/Checkout2";

const mycontext = createContext()

function App() {
  const [islogin, setislogin] = useState(() => {
    return localStorage.getItem("islogin") === "true";
  });
  const value =({
    islogin,
    setislogin
  })

  return (
    <>
    <mycontext.Provider value={value}>
      <BrowserRouter>
        <Navbar />
        <div className='ailgn-center'>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/items"
              element={<Items />}
            />
             <Route 
            path="/items/:id"
            element={<Detailpage/>}
            />
            <Route
              path="/contect"
              element={<Contectus />}
            />
            <Route
              path="/about"
              element={<Aboutus />}
            />
            <Route 
            path="/cart"
            element={<CartPage/>}
            />
            <Route 
            path="/userinfo"
            element={<UserProfile/>}
            />
            <Route
            path="/Checkout"
            element={<Checkout/>}
            />
            <Route
            path="/Checkoutsecond"
            element={<Checkoutp/>}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
      </mycontext.Provider>
    </>
  )
}

export default App
export {mycontext}
