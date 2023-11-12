// Header.js
import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

// href 연결
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <nav className="header-navbar navbar navbar-expand-lg navbar-light bg-white">
                <div className="header-container">
                    <a className="header-navbar navbar-brand" href="/">
                        <img src="/images/icon2.jpg" alt="Home Icon" />
                    </a>
                    <div className="d-flex align-items-center">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    계란 상품 살펴보기
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <NavLink to="/products/all" className="dropdown-item" activeclassname="active">
                                            <span>전체 계란 상품</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/products/organic" className="dropdown-item" activeclassname="active">
                                            <span>전란액</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/products/free-range" className="dropdown-item" activeclassname="active">
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
                                <a className="nav-link" href="/order">계란 주문하기</a>
                            </li>
                            <li className="nav-item">
                                <form className="search-form">
                                    <input className="form-control input-sm" type="search" placeholder="키워드를 입력해보세요." aria-label="Search" />
                                    <button className="search-btn" type="submit">
                                        <span className="bi bi-search"></span>
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
