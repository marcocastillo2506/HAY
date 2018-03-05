import React from 'react';
import $ from "jquery";
import { Slide } from 'react-slideshow-image';


import GalleryImgList from "../cohort/GalleryImgList.jsx";



export default class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
      this.getGallery = this.getGallery.bind(this);
  }

  componentDidMount(){
    this.getGallery();
  }

  getGallery() {
    $.ajax({
      type:'GET',
      url: '/home-pics',
      success: (data) => {
        this.setState({
          images: data[0]
        })
      },
      error: (xhr, status, err) => {
        console.error(err)
      }
    });
  }

   render() {
    return (
      <div >
        <div>
          <GalleryImgList images={this.state.images} />
        </div>
        <div>
          <Slide
          images={this.state.images}
          duration={5000}
          transitionDuration={1000}
        />
        </div>
      </div>
    );
  }
}
