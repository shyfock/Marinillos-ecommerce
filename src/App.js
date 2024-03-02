import React from "react";
//import './App.css';
import Navbar from "./components/Navbar/index";
import Home from "./pages";
import Categories from "./pages/categories";
import Quote from "./pages/quote";
import Record from "./pages/record";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer/index";
import Products from "./components/Products";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NoPage />} />
          <Route
            path="/categories"
            element={
              <ProtectedRoute>
                <Categories />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quote"
            element={
              <ProtectedRoute>
                <Quote />
              </ProtectedRoute>
            }
          />
          <Route
            path="/record"
            element={
              <ProtectedRoute>
                <Record />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blogs"
            element={
              <ProtectedRoute>
                <Blogs />
              </ProtectedRoute>
            }
          />
          <Route 
            path="/products"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

function NoPage() {
  return (
    <div>
      <h2 style={{
        marginTop: 100,
        textAlign: "center"
      }}>
        404
        <br />
        PÁGINA NO ENCONTRADA
      </h2>
    </div>
  )
}
