import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
    static propTypes = {
        icon: PropTypes.string
    }

    render () {
        return (
            <div className="filter-item">
                <i className={ this.props.icon }></i>
                <div className="custom-switch custom-switch--horizontal">
                    <input id={ this.props.radioA } type="radio" name={ this.props.name } checked="checked"/>
                    <label for={ this.props.radioA }>Off</label>
                    <input id={ this.props.radioB } type="radio" name={ this.props.name } />
                    <label for={ this.props.radioB }>On</label><span class="toggle-outside"><span class="toggle-inside"></span></span>
                </div>
            </div>
        )
    }
}