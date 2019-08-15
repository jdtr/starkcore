import React, { Component } from 'react';

//Css
import '../../assets/styles/vendors/animate.css';

//Organisms
import { Header } from '../organisms/o-header';
import { Aside } from '../organisms/o-aside';
import { Cards } from '../organisms/o-items-cards';

export class Home extends Component {
    render () {
        return (
            <div className="main">
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-3">
                            <Aside />
                        </div>
                        <div className="col-xs-12 col-sm-9">
                            <div className="cards">
                                <Cards />
                                <Cards />
                                <Cards />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
