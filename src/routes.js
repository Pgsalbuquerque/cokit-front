import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Raiz/>}/>
          <Route exact path="/user" element={<User/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/product/{product_id}" element={<Product/>}/>
          <Route exact path="/employee/{employee_id}" element={<Employee/>}/>
        </Routes>
    </Router>
  );
}

function Raiz() {
    return <h2>Raiz</h2>;
}

function Signup() {
    return <h2>SignUp</h2>;
}

function Login() {
  return <h2>Login</h2>;
}

function Product() {
    return <h2>Product</h2>;
}

function Employee() {
    return <h2>Employee</h2>;
}

function User() {
  return <h2>User</h2>;
}