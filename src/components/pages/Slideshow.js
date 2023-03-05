import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}


const slideImages = [
    {
    url: "https://www.narayanahealth.org/blog/wp-content/uploads/2020/01/shutterstock_1067441942.jpg",
    caption: 'Slide 1'
    },
    {
    url: "https://www.cittasalute.it/wp-content/uploads/2018/04/Depositphotos_147500463_xl-2015.jpg",
    caption: 'Slide 2'
    },
    {
    url: "https://www.wecanjob.it/moduli/output_immagine.php?id=597",
    caption: 'Slide 3'
    },
    { url: "https://s3.envato.com/files/264883363/DSCF1220.JPG",
        caption: 'Slide 4'
    }
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide duration={2500}>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
};
export default Slideshow;