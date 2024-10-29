import React from 'react';

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-white">
            <div className="flex items-center">
                <img src="/path-to-your-logo.png" alt="Logo" className="h-12 w-auto" />
            </div>

            <nav className="flex space-x-8">
                <a href="#" className="text-red-500">Home</a>
                <a href="#">Results</a>
                <a href="#">Events</a>
                <a href="#">Contact</a>
            </nav>

            <div className="flex space-x-4">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-whatsapp"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
        </header>
    );
};

export default Header;