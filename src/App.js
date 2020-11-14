import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow/MovieRow';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';
import Header from './components/Header/Header';
import Loading from './loading.gif';

import './App.css';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(()=> {
    const loadAll = async () => {

      // Pegar toda a lista
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando o featured (filme em destaque)

      let originals = list.filter(i=>i.slug === 'originals');

      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));


      // Pega um item único da lista, pelo índice random gerado na linha anterior
      let chosenFeatured = originals[0].items.results[randomChosen];

      // Pega todas as informações da série retornada da lista, pelo endpoint de tv, pelo id
      let chosenFeaturedInfo = await Tmdb.getTvInfo(chosenFeatured.id);

      // Seta as informações
      setFeaturedData(chosenFeaturedInfo[0].data);

    }

    loadAll();

  }, []);

  useEffect(() => {
      
    const scrollListener = () => {
      if( window.scrollY > 80 ){
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }

  }, []);

  return(
    <div className="page">

      <Header black={blackHeader} />

      
      { featuredData &&
        <section className="featured" style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${featuredData.backdrop_path})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}>
          <FeaturedMovie featured={featuredData} />
        </section>
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <div className="list-item">

            <MovieRow key={key} title={item.title} items={item.items} />

          </div>

        ))}
      </section>

      <footer>
        <p>
          Feito por <a href="https://devgabrielsouza.com.br" target="_blank">Gabriel Souza</a> com <a href="https://pt-br.reactjs.org/">React Js</a> <span>♥</span>
        </p>

        <p>
          Direitos de imagens: <a href="https://netflix.com" target="_blank">Netflix</a> | Fonte de dados: <a href="https://themoviedb.org/" target="_blank">The Movie DB</a>
        </p>


      </footer>
      
      { movieList.length <= 0 && 
        <div className="loading">
          <img src={Loading}></img>
        </div>
      }

    </div>
  );

}