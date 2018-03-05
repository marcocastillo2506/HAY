import React from 'react';

import HeaderBar from "../components/home/HeaderBar.jsx";
import HolaAboutMe from "../components/profile/HolaAboutMe.jsx";
import PerfilCard from "../components/profile/PictureComponent.jsx";


export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: []
    }
    this.selectSingleProfile = this.selectSingleProfile.bind(this)
  }

  componentDidMount() {
    this.selectSingleProfile(this.props.data)
  }

  selectSingleProfile(profiles) {
    for (let key in profiles) {
      for (let i = 0; i < profiles[key].length; i++){
        if (profiles[key][i].id === parseInt(this.props.match.params.id)) {
          this.setState({
            profile: profiles[key][i]
          })
        }
      }
    }
  }

  render() {
    return (
      <div>
        <HeaderBar />
        <div>
          <HolaAboutMe />
          <br/>
            <br/>
              <br/>
              <br/>
            <section className="LaDeArriba-section">
              <div className="row">
                <div className="col-md-3">
                </div>
                <div id='ProfileCard' className="col-md-6">
                  <div id="card2" className="card">
                    <div className="Nicolas-Card" style={{width: "18rem"}}>
                      <img className="card-img-top-Nicolas" src={`https://i.imgur.com/${this.state.profile.picture_path}.jpg`}/>
                        <div className="card-body">
                        <h4 className="card-title">{`${this.state.profile.first_name} ${this.state.profile.last_name}`}</h4>
                        <h6>Mentor</h6>
                        <p className="card-text">{"View GitHub Profile: " + `https://github.com/${this.state.profile.github_link}`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                </div>
              </div>
            </section>

          <div>
        </div>
        </div>
      </div>
    )
  }
}
