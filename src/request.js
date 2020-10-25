const API_KEY = '52b618e92561346c3bdbb3e0724f384f'

const request = {
    fetchTrending = '/trending/all/week?api_key=${API_KEY}&language=en-US',
    fetchNetflixOriginals = '/discover/tv?api_key=${API_KEY}&with_network=213',
    fetchTopRated = '/movie/top_rated?api_key=${API_KEY}&language=en-US',
    fetchActionMovies = '/discover/movie?api_key=${API_KEY}&with_genres=28',
    fetchComedyMovies = '/discover/movie?api_key=${API_KEY}&with_genres=27',
    fetchHorrorMovies = '/discover/movie?api_key=${API_KEY}&with_genres=10749',
    fetchRomanceMovies = '/discover/movie?api_key=${API_KEY}&with_genres=99'
}

export default request;