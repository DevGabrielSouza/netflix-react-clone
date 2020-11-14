import React, { useState, useEffect } from 'react';
import './MovieRow.css';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default (props) => {

    const [marginListArea, setMarginListArea] = useState(-400);

    const handleLeftArrow = () => {

        let scrollX = marginListArea +  Math.round(window.innerWidth / 2);

        if(scrollX >= 0){
            scrollX = 0;
        }

        setMarginListArea(scrollX);

    }

    const handleRighttArrow = () => {

        let scrollX = marginListArea - Math.round(window.innerWidth / 2);
        let listWidth = props.items.results.length * 185;

        if( window.innerWidth - listWidth > scrollX){
            scrollX = (window.innerWidth - listWidth);
        }

        setMarginListArea(scrollX);
    }

    return (

        <>
            <h2 className="movieRow--title">{props.title}</h2>

            <div className="movieRow">
                
                <div className="movieRow--navigate movieRow--navigateLeft" onClick={handleLeftArrow}>
                    <NavigateBeforeIcon style={{fontSize: 40}} />
                </div>

                <div className="movieRow--listArea" style={{
                    marginLeft: marginListArea,
                    width: props.items.results.length * 200
                    }}>
                    {props.items.results.length > 0 && props.items.results.map((item, index) => (
                        <div key={index} className="movieRow--listItem">
                            <img className="poster" src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.original_title}/>
                            <div className="list-info">
                                <div>
                                    <h3 className="movie-title">{item.title || item.name}</h3>
                                    <p>Nota: {item.vote_average}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="movieRow--navigate movieRow--navigateRight" onClick={handleRighttArrow}>
                    <NavigateNextIcon style={{fontSize: 40}} />
                </div>

            </div>
        </>
    );
}