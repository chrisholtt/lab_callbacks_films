const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.filmTitles = function () {
  const titles = this.films.map((film) => {
    return film.title
  })
  return titles;
};

Cinema.prototype.findFilm = function (title) {
  const film = this.films.filter(film => film.title == title)
  return film;
};

Cinema.prototype.filterByGenre = function (genre) {
  const films = this.films.filter(film => film.genre === genre)
  return films;
};

Cinema.prototype.filterBy = function (property, value) {
  if (property === "genre") {
    const films = this.films.filter(film => film.genre === value)
    return films;
  } else if (property === 'year') {
    const films = this.films.filter(film => film.year === value)
    return films;
  }
};


Cinema.prototype.filterByYear = function (year) {
  const films = this.films.filter(film => film.year === year);
  return films;
};


Cinema.prototype.filmsOverLength = function (length) {
  const films = this.films.filter(film => film.length >= length)

  if (films.length == this.films.length) {
    return true;
  } else {
    return false;
  }
};

Cinema.prototype.getTotalRunTimes = function () {
  const total = this.films.reduce((runningTotal, film) => {
    return runningTotal += film.length
  }, 0)

  return total;
};




module.exports = Cinema;
