import React, { Component } from 'react';

export class Navigation extends Component {
    render () {
        return (
            <nav className={"navigation " + this.props.className }>
                <ul className="navigation-list">
                    <li>
                        <a href="#" className="active">
                            <i className="fas fa-home" aria-hidden="true"></i> Home
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="far fa-envelope" aria-hidden="true"></i> Message
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-star" aria-hidden="true"></i> Whislist
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-cog" aria-hidden="true"></i> Settings
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-user" aria-hidden="true"></i> My account
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}