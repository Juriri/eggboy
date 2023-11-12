// AllProduct.js
import React from 'react';
import './Product.css';
import { NavLink } from 'react-router-dom';

const MainScreen = () => {
    return (
        <main>
            <div className="sell-container">
                <div className="feature-heading">
                    <p className="main-heading">전체 제품</p>
                    <p className="sub-heading">신선한 전란액, 난황, 난백</p>
                </div>

                <ul className="nav sell-nav" role="tablist">
                    <li className="sell-nav-item" role="presentation">
                        <NavLink to="/products/all" className="nav-link header-link"  activeclassname="active">
                            <span>전체</span>
                        </NavLink>
                    </li>
                    <li className="sell-nav-item" role="presentation">
                        <NavLink to="/products/organic" className="nav-link header-link" activeclassname="active">
                            <span>전란액</span>
                        </NavLink>
                    </li>
                    <li className="sell-nav-item" role="presentation">
                        <NavLink to="/products/free-range" className="nav-link header-link" activeclassname="active">
                            <span>난황</span>
                        </NavLink>
                    </li>
                    <li className="sell-nav-item" role="presentation">
                        <NavLink to="/products/free-range" className="nav-link header-link" activeclassname="active">
                            <span>난백</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default MainScreen;
