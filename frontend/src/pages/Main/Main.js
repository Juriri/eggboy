// MainScreen.js
import React from 'react';
import './Main.css';
import Slider from "../../components/Slider/Slider";
import ProductCard from "../../components/ProductCard/ProductCard";
import Map from "../../components/Map/Map"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-magic-slider-dots/dist/magic-dots.css';

const MainScreen = () => {
    const images = ['images/main_images/feature.png', 'images/main_images/feature2.png', 'images/main_images/feature3.png'];
    const textContents = [
        { title: '신선한 달걀 유통', description: '우리는 매일 새로운 신선한 달걀을 제공합니다.' },
        { title: '친환경 축산물', description: '친환경 환경에서 생산된 최상의 축산물을 선별하여 공급합니다.' },
        { title: '최상의 신선도', description: '우리는 최상급 품질의 상품을 항상 유지하고 있습니다.' },
    ];

    const productCards = [
        {
            image: 'images/main_images/feature.png',
            title: '자연특란1',
            subtitle: '60g이상 68g미만의 싱싱란1',
            tagText: 'HACCAP1',
            tagOverlayCount: 1,
            subtitle2: '가격문의',
        },
        {
            image: 'images/main_images/feature2.png',
            title: '자연특란2',
            subtitle: '60g이상 68g미만의 싱싱란2',
            tagText: 'HACCAP2', // 또는 'HACCAP2'로 수정
            tagOverlayCount: 2,
            subtitle2: '가격문의',
        },
        {
            image: 'images/main_images/feature3.png',
            title: '자연특란3',
            subtitle: '60g이상 68g미만의 싱싱란3',
            tagText: 'HACCAP3',
            tagOverlayCount: 1,
            subtitle2: '가격문의',
        },
        // 다른 제품들에 대한 정보 추가
    ];

    const address = "부산 동래구 충렬대로238번가길 58";

    return (
        <div className="home-container">
            <main>
                <div className="main-container">
                    <Slider images={images} textContents={textContents} />
                </div>
                <div className="introduction-container">
                    <div className="production">
                        <h3>
                            <img src="/images/icon/delivery-truck-icon.png" alt="Home Icon" />
                            배송지역: 부산 전역
                        </h3>
                        <h4>제품 소개</h4>
                        <hr className="featurette-divider" />
                        <div className="row">
                            {productCards.map((product, index) => (
                                <div key={index} className="col-md-4">
                                    <ProductCard
                                        image={product.image}
                                        title={product.title}
                                        subtitle={product.subtitle}
                                        tagText={product.tagText}
                                        tagOverlayCount={product.tagOverlayCount}
                                        subtitle2={product.subtitle2}
                                    />
                                </div>
                            ))}
                        </div>


                        <h1 className="featurette-heading fw-normal lh-1"><span>HACCAP</span> 친환경 인증</h1>
                        <h2 className="lead">신선한 달걍 유통</h2>
                        <h3>
                            30년 동안 끊임없는 노력으로 우리는 신선하고 고품질의 계란을 공급해왔습니다.
                            경남유통은 안전한 먹거리를 제공하는 데 전념하고 있습니다.
                            혁신적인 생산과 가공 기술을 통해 항상 위생적이고 청결한 제품을 생산해왔습니다.
                            우리는 계란제품의 다양한 형태를 개발하며, 이를 통해 고객분들께 다양한 옵션을 제공하고 있습니다.
                            경남유통은 늘 최상의 품질을 유지하며, 고객들의 신뢰와 사랑을 받기 위해 최선을 다하고 있습니다.
                            더불어, 우리는 고객 여러분의 건강을 최우선에 두고 더 나은 먹거리를 제공하기 위해 노력하고 있습니다.</h3>
                        <div className="icon-container mt-4 d-flex align-items-center">
                            <div className="col-md-2">
                                <div className="icon-card">
                                    <div className="icon-card-header">
                                        <img src="/images/main_images/eggs-icon.png" alt="Egg Selection" className="icon-img" />
                                    </div>
                                    <div className="icon-card-body">
                                        <div className="icon-label">
                                            <p className="card-text">선별</p>
                                        </div>
                                        <div className="icon-card-title">
                                            <p className="card-text">농장의 신선한 달걀 선별</p>
                                        </div>
                                        <div className="icon-card-subtitle">
                                            <p className="card-text">품질과 신선도를 위해 엄격한 기준으로 선별됩니다</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="icon-card">
                                    <div className="icon-card-header">
                                        <img src="/images/main_images/long-truck-icon.png" alt="Transportation" className="icon-img" />
                                    </div>
                                    <div className="icon-card-body">
                                        <div className="icon-label">
                                            <p className="card-text">운송</p>
                                        </div>
                                        <div className="icon-card-title">
                                            <p className="card-text">안전하고 신속한 운송</p>
                                        </div>
                                        <div className="icon-card-subtitle">
                                            <p className="card-text">전문적인 운송 시스템을 통해 신선한 달걀을 배송합니다</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="icon-card">
                                    <div className="icon-card-header">
                                        <img src="/images/main_images/supplier-icon.svg" alt="Packaging" className="icon-img" />
                                    </div>
                                    <div className="icon-card-body">
                                        <div className="icon-label">
                                            <p className="card-text">포장</p>
                                        </div>
                                        <div className="icon-card-title">
                                            <p className="card-text">정밀하고 안전한 포장</p>
                                        </div>
                                        <div className="icon-card-subtitle">
                                            <p className="card-text">첨단 기술로 달걀을 신선하게 유지하는 안전한 포장</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="introduction">
                        {/*<h4>회사 소개</h4>
                        <hr className="featurette-divider" />*/}
                        <div className="row feature-cards">
                            {/*<div className="feature-card">
                                <div className="col-md-5">
                                    <img src="https://modo-phinf.pstatic.net/20220914_107/1663115945799DPknE_JPEG/mosa2E5WSo.jpeg?type=f540_336" alt="제품"/>
                                </div>
                                <div className="col-md-7 py-lg-3 my-lg-3 d-flex flex-column align-items-center justify-content-around">
                                    <p className="intro-title">자연특란</p>
                                    <p className="intro-subtitle">60g이상 68g미만의 싱싱란</p>
                                    <p className="intro-bottom">HACCAP</p>
                                </div>
                            </div>
                            <div className="feature-card">
                                <div className="col-md-5">
                                    <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA4MjZfNzQg%2FMDAxNTY2ODA2ODA0NTg1.zSMSH2ytrquQAKCOSEsf5exz23-I1CIfDmw4ceUtV8Ag.qB9P-2GLseYb-Kif2AufRb64leVH5GY1cmy1IbLSK2Mg.JPEG.sinbiweb01%2F%25BD%25BD%25B6%25F3%25C0%25CC%25B5%25E513.JPG&type=sc960_832" alt="제품"/>
                                </div>
                                <div className="col-md-7 py-lg-3 my-lg-3 d-flex flex-column align-items-center justify-content-around">
                                    <p className="intro-title">자연특란</p>
                                    <p className="intro-subtitle">60g이상 68g미만의 싱싱란</p>
                                    <p className="intro-bottom">HACCAP</p>
                                </div>
                            </div>
                            <div className="feature-card">
                                <div className="col-md-5">
                                    <img src="https://modo-phinf.pstatic.net/20170822_12/150333070469958Y5S_JPEG/mosamUIVGh.jpeg?type=f353_235" alt="제품"/>
                                </div>
                                <div className="col-md-7 py-lg-3 my-lg-3 d-flex flex-column align-items-center justify-content-around">
                                    <p className="intro-title">자연특란</p>
                                    <p className="intro-subtitle">60g이상 68g미만의 싱싱란</p>
                                    <p className="intro-bottom">HACCAP</p>
                                </div>
                            </div>*/}
                        </div>

                        <h4>오시는 길</h4>
                        <hr className="featurette-divider" />
                        <Map address={address} />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MainScreen;
