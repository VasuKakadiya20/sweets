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
import Checkoutp from "./page/Checkout/Checkoutp";
import AllOrderList from "./page/order/order";
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
              path="/Chikki"
              element={<Items />}
            />
             <Route 
            path="/Chikki/:id"
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
            element={islogin ? <CartPage/> :<Home />}
            />
            <Route 
            path="/userinfo"
            element={<UserProfile/>}
            />
            <Route
            path="/Checkout"
            element={islogin ? <Checkoutp /> : <Home/>}
            />
            <Route
            path="/Order"
            element={islogin ? <AllOrderList /> : <Home/>}
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