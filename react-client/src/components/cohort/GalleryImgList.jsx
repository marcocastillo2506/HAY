import React from "react";
import GalleryThumbnail from "./GalleryThumbnail.jsx"

const GalleryImgList = (props) => (
  <div>
    {props.images.map(images => <GalleryThumbnail images={images} key={images.id} />)}
  </div>
);

export default GalleryImgList;
