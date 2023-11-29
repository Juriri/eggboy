// AllProduct.js
import React from 'react';
import './Product.css';
import { NavLink } from 'react-router-dom';
import ProductCard from "../../components/ProductCard/ProductCard";

const MainScreen = () => {
    const productCards = [
        {
            image: 'images/product_images/eggs-icon.png',
            title: '자연특란4',
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

    return (
        <main>
            <div className="sell-container">
                <div className="feature-heading">
                    <p className="main-heading">전체 제품</p>
                    {/*<p className="sub-heading">
                        <span>전란액, 난황, 난백</span>
                    </p>*/}
                </div>

                {/*<ul className="nav sell-nav" role="tablist">
                    <li className="sell-nav-item" role="presentation">
                        <NavLink to="/products/all" className="nav-link header-link"  activeclassname="active">
                            <span>전체</span>
                        </NavLink>
                    </li>
                    <li className="sell-nav-item" role="presentation">
                        <NavLink to="/products/whole" className="nav-link header-link" activeclassname="active">
                            <span>전란액</span>
                        </NavLink>
                    </li>
                    <li className="sell-nav-item" role="presentation">
                        <NavLink to="/products/yolk" className="nav-link header-link" activeclassname="active">
                            <span>난황</span>
                        </NavLink>
                    </li>
                    <li className="sell-nav-item" role="presentation">
                        <NavLink to="/products/free-range" className="nav-link header-link" activeclassname="active">
                            <span>난백</span>
                        </NavLink>
                    </li>
                </ul>*/}

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
            </div>
        </main>
    );
};

export default MainScreen;
