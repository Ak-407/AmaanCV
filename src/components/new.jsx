import React, { useState, useEffect } from 'react';
import $ from 'jquery';

const PageReloader = () => {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState({});
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 4000);
  }, []);
  $(window).on("load",function(){
    $(".loader-container, .loaderr").fadeOut("slow");
      })
  return (
    <div className="Reload">
      {loading ? (
        <div className="loader-container loaderr">
        
      	  <div className="loadeer">






          <div class="background background0"></div>
<div class="background background1"></div>
<div class="background background2"></div>
<div class="background background3"></div>
<div class="background background4"></div>
<div class="background background5"></div>
<div class="background background6"></div>
<div class="background background7"></div>
<div class="background background8"></div>
<div class="background background9"></div>
<div class="criterion">
  <div class="text text0">S</div>
  <div class="text text1">y</div>
  <div class="text text2">e</div>
  <div class="text text3">d</div>
  <div class="text text4">A</div>
  <div class="text text5">m</div>
  <div class="text text6">a</div>
  <div class="text text7">a</div>
  <div class="text text8">n</div>
  <div class="text text9">: )</div>
  <div class="frame frame0"></div>
  <div class="frame frame1"></div>
  <div class="frame frame2"></div>
  <div class="frame frame3"></div>
  <div class="frame frame4"></div>
  <div class="frame frame5"></div>
  <div class="frame frame6"></div>
  <div class="frame frame7"></div>
  <div class="frame frame8"></div>
  <div class="frame frame9"></div>
  <div class="particle particle00"></div>
  <div class="particle particle01"></div>
  <div class="particle particle02"></div>
  <div class="particle particle03"></div>
  <div class="particle particle04"></div>
  <div class="particle particle05"></div>
  <div class="particle particle06"></div>
  <div class="particle particle07"></div>
  <div class="particle particle08"></div>
  <div class="particle particle09"></div>
  <div class="particle particle010"></div>
  <div class="particle particle011"></div>
  <div class="particle particle10"></div>
  <div class="particle particle11"></div>
  <div class="particle particle12"></div>
  <div class="particle particle13"></div>
  <div class="particle particle14"></div>
  <div class="particle particle15"></div>
  <div class="particle particle16"></div>
  <div class="particle particle17"></div>
  <div class="particle particle18"></div>
  <div class="particle particle19"></div>
  <div class="particle particle110"></div>
  <div class="particle particle111"></div>
  <div class="particle particle20"></div>
  <div class="particle particle21"></div>
  <div class="particle particle22"></div>
  <div class="particle particle23"></div>
  <div class="particle particle24"></div>
  <div class="particle particle25"></div>
  <div class="particle particle26"></div>
  <div class="particle particle27"></div>
  <div class="particle particle28"></div>
  <div class="particle particle29"></div>
  <div class="particle particle210"></div>
  <div class="particle particle211"></div>
  <div class="particle particle30"></div>
  <div class="particle particle31"></div>
  <div class="particle particle32"></div>
  <div class="particle particle33"></div>
  <div class="particle particle34"></div>
  <div class="particle particle35"></div>
  <div class="particle particle36"></div>
  <div class="particle particle37"></div>
  <div class="particle particle38"></div>
  <div class="particle particle39"></div>
  <div class="particle particle310"></div>
  <div class="particle particle311"></div>
  <div class="particle particle40"></div>
  <div class="particle particle41"></div>
  <div class="particle particle42"></div>
  <div class="particle particle43"></div>
  <div class="particle particle44"></div>
  <div class="particle particle45"></div>
  <div class="particle particle46"></div>
  <div class="particle particle47"></div>
  <div class="particle particle48"></div>
  <div class="particle particle49"></div>
  <div class="particle particle410"></div>
  <div class="particle particle411"></div>
  <div class="particle particle50"></div>
  <div class="particle particle51"></div>
  <div class="particle particle52"></div>
  <div class="particle particle53"></div>
  <div class="particle particle54"></div>
  <div class="particle particle55"></div>
  <div class="particle particle56"></div>
  <div class="particle particle57"></div>
  <div class="particle particle58"></div>
  <div class="particle particle59"></div>
  <div class="particle particle510"></div>
  <div class="particle particle511"></div>
  <div class="particle particle60"></div>
  <div class="particle particle61"></div>
  <div class="particle particle62"></div>
  <div class="particle particle63"></div>
  <div class="particle particle64"></div>
  <div class="particle particle65"></div>
  <div class="particle particle66"></div>
  <div class="particle particle67"></div>
  <div class="particle particle68"></div>
  <div class="particle particle69"></div>
  <div class="particle particle610"></div>
  <div class="particle particle611"></div>
  <div class="particle particle70"></div>
  <div class="particle particle71"></div>
  <div class="particle particle72"></div>
  <div class="particle particle73"></div>
  <div class="particle particle74"></div>
  <div class="particle particle75"></div>
  <div class="particle particle76"></div>
  <div class="particle particle77"></div>
  <div class="particle particle78"></div>
  <div class="particle particle79"></div>
  <div class="particle particle710"></div>
  <div class="particle particle711"></div>
  <div class="particle particle80"></div>
  <div class="particle particle81"></div>
  <div class="particle particle82"></div>
  <div class="particle particle83"></div>
  <div class="particle particle84"></div>
  <div class="particle particle85"></div>
  <div class="particle particle86"></div>
  <div class="particle particle87"></div>
  <div class="particle particle88"></div>
  <div class="particle particle89"></div>
  <div class="particle particle810"></div>
  <div class="particle particle811"></div>
  <div class="particle particle90"></div>
  <div class="particle particle91"></div>
  <div class="particle particle92"></div>
  <div class="particle particle93"></div>
  <div class="particle particle94"></div>
  <div class="particle particle95"></div>
  <div class="particle particle96"></div>
  <div class="particle particle97"></div>
  <div class="particle particle98"></div>
  <div class="particle particle99"></div>
  <div class="particle particle910"></div>
  <div class="particle particle911"></div>
</div>

          
          </div>
          <div className='mobile-load'>
          <svg
    width="400"
    height="400"
    viewBox="0 0 40 60"
  >
    <polygon
      class="triangle"
      fill="none"
      stroke="white"
      stroke-width="1"
      points="16,1 32,32 1,32"
    />
    <text
      class="loading"
      fill="white"
      x="0"
      y="45"
    >Loading...</text>
  </svg>
          </div>
        </div>
      ) : (
        <div className="main-content" >
        </div>
      )}
    </div>
  );
};


export default PageReloader;


