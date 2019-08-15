import React, { Component } from 'react';

export class Search extends Component {
    render () {
        return (
            <div className="cont-search">
                <div className="title-filter">
                    <h3>Status</h3>
                </div>
                <div className="field-search">
                    <button aria-label="Searchr">
                        <i className="fas fa-search" aria-hidden="true"></i>
                    </button>
                    <input type="text" placeholder="Search" />
                </div>
            </div>
        )
    }
}