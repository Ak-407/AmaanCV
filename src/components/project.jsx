import React from "react"


function projects(){
//     document.querySelector('.navbar-btn')
// .addEventListener('click', () => {
  
  
//   document.querySelector('.navbar-wrapper')
//   .classList.toggle('change');
// });
function click() {
    document.querySelector('.navbar-wrapper').classList.toggle('change');
  }
    return(<div>
<div class="navbar-wrapper">
  <div class="navbar">
    <a href="https://weather-phi-five.vercel.app/" class="navbar-link"><i class="fa-solid fa-cloud-sun-rain"></i></a>
    <a href="https://ak-407.github.io/Voice-Text-Converter-/" class="navbar-link"><i class="fa-brands fa-teamspeak"></i></a>
    <a href="https://ak-407.github.io/Chat-GPT/" class="navbar-link"><i class="fa-solid fa-robot"></i></a>
    <a href="https://syedamaan.vercel.app/" class="navbar-link"><i class="fa-solid fa-person-shelter"></i></a>
    <a href="https://blogpost-1b1k.onrender.com/" class="navbar-link"><i class="fa-regular fa-id-badge"></i></a>
    <a href="https://ak-407.github.io/Contact-Me/" class="navbar-link"><i class="fa-sharp fa-solid fa-blog"></i></a>
  </div>
  
  <div onClick={click} class="navbar-btn">
    <i class="fas fa-plus"></i> 
  </div>
</div>
     

</div>)
}

export default projects;
