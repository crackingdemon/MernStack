import React from 'react';
import HNB from '../images/HNB1.jpg';
import HNB1 from '../images/HNB2.png';


const Home = () => {
    return (
        <>
        
        <div>
           <header className="w3-display-container w3-content w3-wide"  id="home">
               <br/>
  <img className="w3-image" src={HNB} alt="HNB" width="1500" height="800"/>
  <div className="w3-display-middle w3-margin-top w3-center">
    <h1 className="w3-xxlarge w3-text-white"><span class="w3-padding w3-black w3-opacity-min"><b>HNB</b></span> <span class="w3-hide-small w3-text-light-grey">Central University</span></h1>
  </div>
</header>
<br/>

<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={HNB1} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={HNB} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={HNB} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
            
        </div>
        
        </>
    )
}

export default Home
