import React from "react";

export default class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark ">
                {/* Brand/logo */}
                <a className="navbar-brand" href="#">Logo</a>
                {/* Links */}
                <div className="collapse navbar-collapse ">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 3</a>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}