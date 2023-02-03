import React from 'react';
import First from './components/first';
import Head from './components/head';
import Middle from './components/middle';
import Middle2 from './components/middle2';
import Middle3 from './components/middle3';
import Middle4 from './components/middle4';
import Footer1 from './components/footer1';
import Footer from './components/footer';
import PageReloader from './components/new';
import App from './components/contact'
import AboutMe from './components/about';
import { BrowserRouter, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'





const Home = () =>{return(

<div>
<PageReloader />
<section>
<header >
<First  />
<Head />
<Middle />
<Middle3 />
<Middle2 />
<Middle4 />
<Footer1 />
<Footer />
</header>
</section>

 

</div>)
}

export default Home;
 