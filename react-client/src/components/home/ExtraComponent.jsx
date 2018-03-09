import React from "react";


const style = {
  backgroundColor: 'black'
}

const ExtraComponent = (props) => (

  <section className="third-section">
    <div className="row">
      <div className="col-md-3">
        <div className="card" style={style}>
          <div className="Aida's-Card" style={{width: "18rem"}}>
            <img className="card-img-top-Aida" src="https://i.imgur.com/Wq6Ucne.jpg" alt="Aida's Pro Pic"/>
            <div className="card-body">
              <h4 className="card-title">Aida Chávez</h4>
                <h6>Head of Students’ Wellbeing</h6>
              <p className="card-text">Aida is a specialist in migration and advocacy for migrant communities,
                refugees and displaced populations. She has nine years of experience in managing and implementing
                migrant assistance through public policy.</p>
              <a href="http://www.gq.com.mx/bon-vivant/articulos/los-mejors-mercados-y-bazares-de-la-cdmx/6609" className="btn btn-primary">visit these places today!</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-1">
      </div>
      <div id='ExtraComponent' className="col-md-4">
        <div className="card3">
          <div className="Camilo's-Card" style={{width: "18rem"}}>
            <img className="card-img-top-Camilo" src="https://i.imgur.com/FiUnPA7.jpg" alt="Camilo's Pro Pic"/>
            <div className="card-body">
              <h4 className="card-title">Lic Camilo Torres</h4>
                <h6>Official Stress Handler</h6>
              <p className="card-text">Woof woof woof, gimme food!</p>
              <a href="https://www.petco.com.mx/PromocionesMes?gclid=CjwKCAiAz-7UBRBAEiwAVrz-9bTfY6rvnQF7a_C333c-_sw6j36S6b8VTVrdnnVouH7XY-Jv4sItwBoCJ6UQAvD_BwE" className="btn btn-primary">Get me toys here!</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-1">
      </div>
      <div className="col-md-3">
        <div id="card2" className="card" style={style}>
          <div className="Nicola's-Card" style={{width: "18rem"}}>
            <img className="card-img-top-Cas" src="https://i.imgur.com/wwzpAUA.jpg?1" alt="Cas's Pro Pic"/>
            <div className="card-body">
              <h4 className="card-title">Cas Biekmann</h4>
              <h6>Counsoler of Students’ Wellbeing</h6>
              <p className="card-text">Cas is HolaCode's friendlist (and only) Dutch student succes counsoler.
                 He likes music, guitars, the gym and football(The European kind). Even though he has been for
                a short while he has fitted in well with the Hola-Code Family</p>
              <a href="http://www.gibson.com/" className="btn btn-primary">What do I do?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

);

export default ExtraComponent;
