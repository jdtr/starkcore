import React, { Component } from 'react';

//Css
import '../../assets/styles/aside.scss';

//Atoms
import { TitleFilter } from '../atoms/m-title-filter';

//Molecules
import { Filter } from '../molecules/m-filter';
import { Search } from '../molecules/m-search';

export class Aside extends Component {
    render () {
        return (
            <aside className="aside-main">
                <TitleFilter />
                <div className="cont-filters">
                    <Filter icon="fas fa-cart-arrow-down" radioA="cart-a" name="cartName" radioB="cart-b" />
                    <Filter icon="fas fa-calendar-alt" radioA="calendar-a" name="calendarName" radioB="calendar-b" />
                    <Filter icon="far fa-heart" radioA="heart-a" name="heartName" radioB="heart-b" />
                </div>
                <Search />
            </aside>
        )
    }
}