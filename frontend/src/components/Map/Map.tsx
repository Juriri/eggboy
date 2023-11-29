import React, { useEffect } from 'react';
import {inspect} from "util";

interface MapProps {
    address: string;
}

const Map: React.FC<MapProps> = ({ address }) => {
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    useEffect(() => {
        // Load the Daum Map API script dynamically
        const script = document.createElement('script');
        script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
        script.async = true;
        document.head.appendChild(script);

        // Cleanup to avoid memory leaks
        return () => {
            document.head.removeChild(script);
        };
    }, []); // Empty dependency array ensures this effect runs once when the component mounts

    const openDaumPostcode = () => {
        // You can use Daum Postcode API functions here after the script is loaded
        // Example: new daum.Postcode({...});
    };

    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${encodeURIComponent(
        address
    )}&region=KR&language=ko`;

    return (
        <div>
            <div id="map">
                <p style={{ color: 'black' }}>{address}</p>
                <iframe
                    title="Google Map"
                    src={mapUrl}
                    width="100%"
                    height="400px"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default Map;
