function movies(arr) {

  let movieInfoObj = {};

  for (let i = 0; i < arr.length; i++) {

    if (arr[i].includes('addMovie')) {

      let movie = arr[i].replace('addMovie ', '');

      movieInfoObj[i] = { name: movie }

    } else if (arr[i].includes('directedBy')) {

      let info = arr[i].split(' directedBy ')

      let movieName = info[0];

      let director = info[1];

      for (let el in movieInfoObj) {

        if (movieInfoObj[el].name === movieName) {

          movieInfoObj[el].director = director;

        }

      }

    } else if (arr[i].includes('onDate')) {

      let info = arr[i].split(' onDate ')

      let movieName = info[0];

      let date = info[1];

      for (let el in movieInfoObj) {

        if (movieInfoObj[el].name === movieName) {

          movieInfoObj[el].date = date;

        }
     
      }

    }

  }

  for (let el in movieInfoObj) {

    if (movieInfoObj[el].name && movieInfoObj[el].director && movieInfoObj[el].date) {
      let parse = JSON.stringify(movieInfoObj[el]);

      console.log(parse);
    }

  }

}

movies([
  'addMovie Fast and Furious',
  'addMovie Godfather',
  'Inception directedBy Christopher Nolan',
  'Godfather directedBy Francis Ford Coppola',
  'Godfather onDate 29.07.2018',
  'Fast and Furious onDate 30.07.2018',
  'Batman onDate 01.08.2018',
  'Fast and Furious directedBy Rob Cohen'
]);