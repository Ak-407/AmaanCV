import React from "react";
import { Link } from "react-router-dom";
function middle(){
    return(<div data-aos="fade-in">
    <Link to="/about"><h1 className="M1">About Me</h1></Link>
    <span>
    <p className="M1Para">
    <h1 className="M1h1">Brief overview of myself</h1>
        As a young individual, I was introduced to the world of technology through my first Windows laptop. 
        However, I found that I was not particularly interested in the typical activities such as gaming that many of my peers
        were engaged in. It was not until I was introduced to the powerful operating 
        <Link to="/about">Click to view our about page</Link>
        {/* system, Kali Linux, by  */}
        {/* a friend who is now a 
        full stack web developer, that I truly discovered my passion for technology. Through utilizing Kali Linux, I was able to gain 
        a deeper understanding of the inner workings of technology and the potential it holds. I found myself drawn to activities such 
        as cracking passwords and phishing, as well as exploring the dark web. It was through these experiences that I came to realize
        that computer engineering was the field that aligns with my interests and skillset. This led to my decision to pursue a career
        in computer engineering. */}
    </p>
    </span>
    <span id="M1Progress">
    <br></br>
    <br></br>
    <h1 className="M1h1" data-aos="fade-in">Front-End Development</h1>
    <div class="progress" data-aos="fade-in">
    <div class="progress-bar w-75 progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <hr></hr>
    <hr></hr>
    <h1 className="M1h1" data-aos="fade-in">Back-End Development</h1>
    <div class="progress" data-aos="fade-in">
    <div class="progress-bar w-75 progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <hr></hr>
    <hr></hr>
    <h1 className="M1h1" data-aos="fade-in">Ethical Hacking</h1>
    <div class="progress" data-aos="fade-in">
    <div class="progress-bar w-75 progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <hr></hr>
    <hr></hr>
    </span>
    </div>)
}

export default middle;
