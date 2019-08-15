import React, { Component } from 'react';

//Css
import '../../assets/styles/header.scss';

//Atoms
import { Logo } from '../atoms/a-logo';

//molecules
import { Navigation } from '../molecules/m-menu';

export class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };

        this.showMenu = this.showMenu.bind(this);
      }

    showMenu () {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render () {
        return (
            <header>
                <div className="container">
                    <div className="row middle-xs">
                        <div className="col-xs-12 col-md-3 cont-logo">
                            <Logo />
                            <button className={ "btn-mobile " + (this.state.isToggleOn ? "is-active" : "is-inactive") } id="btn-mobile" onClick={this.showMenu}>
                                <span aria-hidden="true"></span>
                            </button>  
                        </div>
                        <div  className="col-xs-12 col-md-9">
                            <Navigation className={ this.state.isToggleOn ? "is-active" : "is-inactive" } />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}