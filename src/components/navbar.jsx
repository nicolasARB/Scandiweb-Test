import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Addform from './AddNav';
import Productlist from './productlist';

export default function Navbar() {
  const [enabled, setEnabled] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

function massdelete(){
var queryall = document.querySelectorAll(".delete-checkbox")
queryall.forEach(el => {
  console.log(el.parentNode);
  el.parentNode.remove();
})
}




  const handleAddClick = () => {
    setEnabled(false);
    navigate('/addproduct');
  };

  return (
    <nav className={`navbar navbar-expand -lg navbar-black bg-white d-flex justify-content-between border-bottom mb-3 ${location.pathname === '/addproduct' ? 'd-none' : ''}`}>
    <p className="h1">Product list </p>
    <div className='navbar-nav ms-auto' style={{ marginRight: 2 + 'em', paddingLeft: 5 + "rem" }}>
        <Link className='nav-link text-light text-black border border-dark' style={{ marginRight: 1 + 'em' }} onClick={handleAddClick} disabled={!enabled} to='/addproduct'>Add</Link>
      <button className='nav-link text-light text-black border border-dark' id='delete-product-btn' onClick={massdelete}>Mass Delete</button>
<div></div>
    </div>
  </nav>
  );
}