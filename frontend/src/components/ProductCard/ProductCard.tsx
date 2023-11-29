// ProductCard.tsx
import React from 'react';
import './ProductCard.css';
interface ProductCardProps {
    image: string;
    title: string;
    subtitle: string;
    subtitle2: string;
    tagText: string;
    tagOverlayCount: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, subtitle,subtitle2, tagText, tagOverlayCount }) => {
    return (
        <div className="card">
            <div className="card-header">
                {Array.from({ length: tagOverlayCount }).map((_, index) => (
                    <div key={index} className="tag-overlay">
                        <p>{tagText}</p>
                    </div>
                ))}
                <img src={image} alt="Thumbnail" />
            </div>
            <div className="card-body">
                <div className="card-title">
                    <p className="card-text">{title}</p>
                </div>
                <div className="card-subtitle">
                    <p className="card-text">{subtitle}</p>
                </div>
            </div>
            <div className="card-bottom">
                <p className="card-text">{subtitle2}</p>
            </div>
        </div>
    );
};

export default ProductCard;
