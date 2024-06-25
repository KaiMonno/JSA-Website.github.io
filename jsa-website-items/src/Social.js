import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import Gallery from "./Gallery";
import GallerItem from "./GalleryItem"

const Social = () => {

    const galleryItems = [
        {  title: "JSA Spring Banquet 2023", image: "Gallery1.png" , linkUrl: "https://www.instagram.com/p/CqtRd1PP6Ws/"},
        { title: "JSA Allen Art Museum Trip", image: "Gallery2.png", linkUrl: "https://www.instagram.com/p/CpZfevsMdcW/?img_index=1" },
        { title: "JSA Language Table", image: "Gallery3.png", linkUrl: "https://www.instagram.com/p/CooEX_LLl8h/" },
        { title: "Asian Night Market 2023", image: "Gallery4.png", linkUrl: "https://www.instagram.com/p/CoazpHYrz7U/" },
        { title: "JSA Spring Banquet 2022", image: "Gallery5.png", linkUrl: "https://www.instagram.com/p/CdSG7jYNRip/" },
        { title: "Asian Night Market 2022", image: "Gallery6.png", linkUrl: "https://www.instagram.com/p/CdGs4OgODZi/" },
        { title: "JSA Origami Night", image: "Gallery7.png", linkUrl: "https://www.instagram.com/p/CbQ3bjPr1FL/?img_index=1" },
     ];
   
     return (
       <div className="App">
         <Gallery items={galleryItems} />
       </div>
     );

};

export default Social;