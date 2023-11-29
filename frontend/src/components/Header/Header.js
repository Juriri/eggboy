// Header.js
import React, {useState} from 'react';
import './Header.css';
// Link 연결
import { NavLink, useLocation } from 'react-router-dom';
// Modal창
import { Modal, Button } from 'react-bootstrap';


const Header = () => {
    // 상위 메뉴와 하위 메뉴가 함께 활성화되도록 하는 함수
    const location = useLocation();
    const isProductActive = () => location.pathname.startsWith("/products/");
    const isActive = (match, location) => {
        return match || isProductActive();

    };

    return (
        <header>
            <div className="header-container">
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <NavLink to="/" className="nav-link top-link" activeclassname="active">
                        <img src="/images/icon/feature_logo.png" alt="Home Icon" />
                    </NavLink>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className={`nav-link dropdown-toggle top-link ${isActive(null, location) ? 'active' : ''}`} href="#" id="navbarDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                계란 상품 보기
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <NavLink to="/products/all" className="dropdown-item" activeclassname="active">
                                        <span>전체 상품</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/products/whole" className="dropdown-item" activeclassname="active">
                                        <span>전란액</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/products/yolk" className="dropdown-item" activeclassname="active">
                                        <span>난황</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/products/free-range" className="dropdown-item" activeclassname="active">
                                        <span>난백</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <form className="search-form">
                                <input className="form-control input-sm" type="search" placeholder="키워드를 입력해보세요." aria-label="Search" />
                                <button className="search-btn" type="submit">
                                    <span className="bi bi-search"></span>
                                </button>
                            </form>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/introduce" className="nav-link top-link" activeclassname="active">
                                <span>회사소개&시설소개</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/call" className="nav-link top-link" activeclassname="active">
                                <span>1:1 문의</span>
                            </NavLink>
                        </li>
                        {/*<li className="nav-item">
                                <a id="kakao-login-btn" href="http://127.0.0.1:5000/login/kakao">
                                    <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="150" alt="카카오 로그인 버튼" />
                                </a>
                            </li>*/}
                    </ul>
                </nav>
            </div>
        </header>
    );
};


export default Header;
