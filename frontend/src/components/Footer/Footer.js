// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <a href="카카오톡 채널 링크" target="_blank" rel="noopener noreferrer">
                        <h4>카카오톡 채널</h4>
                    </a>
                    <p>달걀 유통업에 관한 소식과</p>
                    <p>업데이트를 받아보세요.</p>
                </div>
                <div className="footer-content">
                    <a href="mailto:이메일 주소">
                        <h4>이메일 문의하기</h4>
                    </a>
                    <p>더 많은 정보나 궁금한 점이 있으면</p>
                    <p>언제든지 문의해주세요.</p>
                </div>
            </div>
            {/*<div className="footer-bottom">
                <p>&copy; 2023 경남유통. All Rights Reserved.</p>
            </div>*/}
        </footer>
    );
};

export default Footer;
