import React from "react";

function Header() {
    return(
        <header>
            <nav className="navbar navbar-expand bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Bhukkad</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Stores</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">About us</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;