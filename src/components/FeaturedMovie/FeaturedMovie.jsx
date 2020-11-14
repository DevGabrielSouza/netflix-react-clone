import React from 'react';
import './FeaturedMovie.css';

export default (props) => {

    let descricao = `${props.featured.overview.substring(0, 220)} ${props.featured.overview.length >= 220 ? '(...)' : ''}`;



    return (
        <div className="featuredMovie">

            <div className="featuredMovie--info">
                <div className="featuredMovie--info--content">
                    <h1 className="featuredMovie--title">{props.featured.name}</h1>
                    <div className="featuredMovie--tvinfo">

                        <div className="featiredMovie--popularity">
                            { props.featured.popularity }
                        </div>

                        <div className="featiredMovie--release">
                            { new Date(props.featured.first_air_date).getFullYear() } 
                        </div>

                        <div className="featiredMovie--seasons">
                            { props.featured.number_of_seasons } Temporada{props.featured.number_of_seasons > 1 && 's'} ({props.featured.status})
                        </div>

                    </div>

                    <div className="featuredMovie--description">
                        {descricao}
                    </div>

                    <div className="featuredMovie--buttons">

                        <a href="#" className="featuredMovie--button-play">
                           ► Assistir
                        </a>

                        <a href="#" className="featuredMovie--button-addToList">
                            + Minha lista
                        </a>

                    </div>

                    <div className="featuredMovie--genres">
                        <strong>Gêneros: </strong>

                        {
                            props.featured.genres.map((item, index) => (
                                <span key={index}>{item.name} {index != (props.featured.genres.length - 1) ? ', ' : ''} </span>
                            ))
                        }

                    </div>

                </div>
            </div>

        </div>
    );
}