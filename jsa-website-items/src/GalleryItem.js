import React from "react";
import Gallery from "./Gallery.css"


function GalleryItem({ image, title, onClick, linkUrl }) {
    return (
      <div className="gallery-item" onClick={onClick}>
        <a href={linkUrl} className="gallery-item" target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="gallery-image" />
        <h3 className="gallery-title">{title}</h3>
        </a>
      </div>
    );
  }
  export default GalleryItem;