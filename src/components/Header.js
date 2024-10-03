import React from 'react';

const Header = () => {
    return (
        <header>
            <img className="page-cover-image banner" src="myportfolio/banner.png" />
            <div className="page-header-icon page-header-icon-with-cover">
                <span className="icon">👋</span></div>
            <div className="page-title-content">
                <h1 className="page-title">Hi, I’m Kiran Muppana</h1>
                <p className="page-description"><em>
                    <span className="highlight-gray">
                        I’m a Software
                        Developer based in Florida
                    </span>
                </em></p>
            </div>
        </header>
    );
};

export default Header;
