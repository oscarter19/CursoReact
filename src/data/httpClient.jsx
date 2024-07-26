const API ="https://api.themoviedb.org/3"
export function get(path){
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmM2ZmZTU1NzFiNGFmMDFmNjlhNGRhZDc3YzI4ZmQ1NiIsIm5iZiI6MTcyMTg1NjMyNi40Mjc4MjYsInN1YiI6IjY2YTA0YWY1YjEwZjBhM2UyZTA5YzM1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ivFbIAWM0qmPRI2A4yxsVwt8mgH-5-KycmJDqqXaurQ",
      "Content-Type": "application/json;charset+uft-8",
    },
  }).then((result) => result.json());
}