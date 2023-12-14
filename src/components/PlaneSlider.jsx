import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const PlaneSlider = ({ images }) => {
  const splideOptions = {
    type: 'fade', // ya da 'slide' olarak ayarlayabilirsiniz
    heightRatio: 0.5,
    pagination: false,
    arrows: true,
  };
  
  const imageStyle = {
    maxWidth: '100%', // Resim maksimum genişliği
    maxHeight: '100%', // Resim maksimum yüksekliği
  };
  return (
    <Splide options={splideOptions}>
      {images.map((image, index) => (
        <SplideSlide key={index}>
          <a href={image.link} target="_blank" rel="noopener noreferrer">
            <img style={imageStyle} src={image.src} alt={`Slide ${index + 1}`} />
          </a>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default PlaneSlider;
