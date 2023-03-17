import React from "react";
import $ from "jquery";


function head(){
  
  const section = document.querySelector("section");
let currentPixel = window.pageYOffset
  const looper = function () {
    const newPixel = window.pageYOffset;
    const diff = newPixel - currentPixel
    const speed = diff * 0.35;
    
    section.style.transform = "skewY(" + speed + "deg)"
    
    
    currentPixel = newPixel;
    
    requestAnimationFrame(looper)
  }
  
  
    return(<div id="HHH" className='scroll-wrapper '>
    <div className="scroll-wrapper2">
    <span id="PHead" >
        {/* <img id="PHead" src="/imeges/P_20221211_154157-05.jpeg" alt="amaan"></img> */}
        {window.addEventListener('scroll', function(){
         this.document.getElementById("PHead").style.backgroundSize =200 -  +window.pageYOffset/60+"%";
         this.document.getElementById("PHead").style.opacity =95 -  +window.pageYOffset/100+"%";
         this.looper();
     })}
</span>
<span>
{window.addEventListener('scroll', function(){
this.looper();})}
        <main class="Hcontainer">
<div className="HCF"><img src="/imeges/code (1).png"></img></div>
<div><p>Hello 👋 I'm</p>
  <section class="animation">
    <div class="Hfirst"><div>Syed Amaan</div></div>
    <div class="Hsecond"><div>Full Stack Engineer</div></div>
    <div class="Hthird"><div>Systems Engineer</div></div>
  </section></div>
  <div class="login-box">
  <form>
    <a href="https://syedamaan.vercel.app/about">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Explore
    </a>
  </form>
</div>
</main>
</span>
    </div>
    </div>
    )


}


export default head;
