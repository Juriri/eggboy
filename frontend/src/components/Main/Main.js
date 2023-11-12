// MainScreen.js
import React from 'react';
import './Main.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainScreen = () => {
    const images = ['images/feature1.png', 'images/feature2.jpg', 'images/feature3.jpg'];
    const textContents = [
        { title: '신선한 달걀 유통,', description: '신선한 달걀 유통합니다.' },
        { title: '신선한 달걀 유통,', description: '신선한 달걀 유통합니다.' },
        { title: '신선한 달걀 유통,', description: '신선한 달걀 유통합니다.' },
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, //2초
    };

    return (
        <div className="home-container">
            <main>
                <div className="main-container">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index} className="image-container">
                                <div className="text-overlay">
                                    <h2>{textContents[index].title}</h2>
                                    <p>{textContents[index].description}</p>
                                </div>
                                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                <img src={image} alt={`Owl Image ${index + 1}`}  />
                            </div>
                        ))}
                    </Slider>
                </div>
            </main>
        </div>
    );
};

export default MainScreen;
