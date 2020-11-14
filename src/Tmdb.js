const API_KEY = "1fcb01fb358289099ca35d707c4dab2d";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();

    // Retornar o resultado convertido para JSON
    return json;
}

export default  {

    getTvInfo: async(tv_id) => {
        return [
            {
                data: await basicFetch(`/tv/${tv_id}?api_key=${API_KEY}&language=pt-BR`)
            }
        ]
    },

    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais Netflix',
                items: await basicFetch(`/discover/tv?with_networks=213&api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'trending-today',
                title: 'Em alta hoje',
                items: await basicFetch(`/trending/movie/day?api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'trending-week',
                title: 'Em alta essa semana',
                items: await basicFetch(`/trending/movie/week?api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'animes',
                title: 'Animes',
                items: await basicFetch(`/discover/movie?with_genres=16&api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: await basicFetch(`/discover/movie?with_genres=99&api_key=${API_KEY}`)
            },
        ]
    }
}