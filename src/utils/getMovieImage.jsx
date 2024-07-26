import palomitas from "../img/palomitas.png"
export function getMovieImages(path,width){
    return path ? `https://image.tmdb.org/t/p/w${width}${path}`:palomitas
}
// const imageUrl = "https://image.tmdb.org/t/p/w300"+movie.poster_path;