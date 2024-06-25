import React from "react";
import GalleryCSS from "./Gallery.css"
import GalleryItem from "./GalleryItem";

function Gallery({ items }) {
    // This function will be called when an item is clicked
    const handleItemClick = (item) => {
      // You can handle the click however you wish, such as navigating to a new route or opening a modal
      console.log("Clicked item:", item.title);
    };
  
    return (
      <div className="gallery">
        {items.map((item, index) => (
          <GalleryItem
            key={index}
            image={item.image}
            title={item.title}
            onClick={() => handleItemClick(item)}
            linkUrl={item.linkUrl}
          />
        ))}
      </div>
    );
  }
  
  export default Gallery;