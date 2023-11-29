// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import AllProduct from './pages/Product/AllProduct';
function App() {
    return (
        <Router>
            <div className="App">
                {/* Header component */}
                <Header />

                {/* Routes for different pages */}
                <Routes>
                    {/* Main page */}
                    <Route path="/" element={<Main />} />

                    {/* AllProduct page */}
                    {/*<Route path="/products" element={<AllProduct />} />*/}
                    <Route path="/products/*" element={<AllProduct />} />
                </Routes>

                {/* Footer component */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
