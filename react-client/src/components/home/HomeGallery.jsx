import React from "react";

const HomeGallery = (props) => (

  <section className="second-section">
    <div className="row">
      <div className="col-md-3">
        <div className="card">
          <div className="Diana's-Card" style={{width: "18rem"}}>
            <img className="card-img-top-Diana" src="https://i.imgur.com/uLhnphg.jpg?1" alt="Diana's Pro Pic"/>
            <div className="card-body">
              <h4 className="card-title">Diana Izquierdo</h4>
                <h6>COO</h6>
                  <p className="card-text">Diana likes to make things happen and work for projects that enable her to
                    learn different things. Her everyday adventures in Hola Code include being a problem solver,
                    communicator, maximizing the budget, answering business necessities and being outside of her
                    comfort zone. She has a BA in Finance from Tecnológico de Monterrey and MSc IBN from ESC Rennes
                    School of Business, France.</p>
                  <br/>
                  <br/>
              <a href="https://www.starbucks.com/" className="btn btn-primary">Lets get a coffee!</a>
            </div>
          </div>
        </div>
      </div>
      <div id='GalleryInTheCenter' className="col-md-6">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
          <h3>"Gallery's render part goes in here"</h3>
      </div>
      <div className="col-md-3">
        <div id="card2" className="card">
          <div className="Leni's-Card" style={{width: "18rem"}}>
            <img className="card-img-top-Leni" src="https://i.imgur.com/G9E7Fv3.jpg?1" alt="Leni's Pro Pic"/>
            <div className="card-body">
              <h4 className="card-title">Leni Alvarez</h4>
              <h6>COO</h6>
              <p className="card-text">Leni is part of the 1.5 generation in the limbo, legally Mexican but raised
                “the American way”. At 16, she found out she was living undocumented in the US and had to leave
                the only country she knew as home. After overcoming many obstacles thanks to the help of many, she
                has been able to empower herself through education. Through her life experience and education, she
                wants to help empower her community of Poch@s coming back to Mexico.</p>
              <a href="https://www.holacode.com" className="btn btn-primary">Get to know more about the program!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



)

export default HomeGallery;
