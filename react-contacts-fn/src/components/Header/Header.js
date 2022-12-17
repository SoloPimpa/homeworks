import React from 'react';
import "./Header.css";

function Header() {
    return (
        <div className="head">
            <div className="container">Name</div>
            <div className="container">Surname</div>
            <div className="container">Email</div>
            <div className="container-actions">Actions</div>
        </div>
    )
}

export default Header;