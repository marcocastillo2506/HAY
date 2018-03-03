import React from 'react';
/*{cohort/:id ==> :id === profile id
props.data = { mentors: [22, 23, 24, 25]
               students: [0-21] }
props.data. ${mentors || students}${[index]} .property}*/
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
/*
  props = object
    data = object
      key = array
        profile = object
*/
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
        <div style={{color: "white"}}>
          <img className="profile-picture" src={`https://i.imgur.com/${this.state.profile.picture_path}.jpg`}/>
          <div>{`${this.state.profile.first_name} ${this.state.profile.last_name}`}</div>
          <div>{this.state.profile.github_link}</div>
          <div>{this.state.profile.about_me}</div>
        </div>
      </div>
    )
  }
}
