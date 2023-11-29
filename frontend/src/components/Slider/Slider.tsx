// Slider.tsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SliderProps {
    images: string[];
    textContents: { title: string; description: string }[];
}

const CustomSlider: React.FC<SliderProps> = ({ images, textContents }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index} className="image-container">
                    <div className="text-overlay">
                        <h2>{textContents[index].title}</h2>
                        <p>{textContents[index].description}</p>
                    </div>
                    <img src={image} alt={`Owl Image ${index + 1}`} />
                </div>
            ))}
        </Slider>
    );
};

export default CustomSlider;
