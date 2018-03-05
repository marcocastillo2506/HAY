import React from "react";

const GalleryThumbnail = (props) => (
  <div sy>
      <img id='allImages' className="gallery-images" src={`https://imgur.com/${props.images.pic_path}.jpg`}/>
  </div>
)

export default GalleryThumbnail;
