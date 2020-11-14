import React from 'react';
import './Header.css';

export default (props) => {
    return (
        <header className={props.black ? 'black' : ''}>

            <div className="header--logo">
                <a href="">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png" alt=""/>
                </a>
            </div>

            <div className="header--user">
                <img src="https://occ-0-2023-1567.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABeZakDz11ZWzhgfol0EvY3nQQfPNItHRE_Ek8LFdWkZ3fEf_a2By9czWI0zTV-AtR_B66axVhJUOqTD6vMmPlhnFyZaE.png?r=f71" alt=""/>
            </div>

        </header>
    );
}