import React from "react"
import { Link } from "react-router-dom"


function first(){

    function openNav() {
        document.getElementById("myNav").style.width = "100%"
      }
      
      function closeNav() {
        document.getElementById("myNav").style.width = "0%"
      }
     return(<div>  
    <div id="myNav" class="overlay">
  <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
  <div class="overlay-content">
  <Link to="/about">About</Link>
  <a href="https://ak-407.github.io/Contact-Me/" target="_blank" rel="noopener noreferrer">Services</a>
  <a href="https://ak-407.github.io/Contact-Me/" target="_blank" rel="noopener noreferrer">Contact</a>
  </div>
</div>

<div className="TB"  onClick={openNav}>&#9776; open</div>



     

</div>)
}

export default first;
