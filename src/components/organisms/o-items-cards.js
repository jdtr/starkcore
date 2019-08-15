import React, { Component } from 'react';

//Css
import '../../assets/styles/card.scss';

export class Cards extends Component {
    render () {
        return (
            <div className="card animated fadeInUp">
                <div className="card_date">
                    <span>Monday<br /> 10 2:28<br /> PM </span>
                </div>
                <div className="card_location">
                    <div className="card_info">
                        <i className="fas fa-location-arrow"></i>
                        <div className="card_cont">
                            <p>Houston, TX, 33619</p>
                            <i className="fas fa-chevron-down"></i>
                            <p>Allanta, GA, 30123</p>
                        </div>
                    </div>
                    <div className="card_actions">
                        <i className="fas fa-truck"></i>
                        <span>$250.00</span>
                        <button className="card_more">+</button>
                        <i className="fas fa-ellipsis-v"></i>
                    </div>
                </div>
            </div>
        )
    }
}