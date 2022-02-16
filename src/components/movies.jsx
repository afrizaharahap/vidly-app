import react from "react";
import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = { movies: getMovies() };

  handleDelete = (movie) => {
    //console.log("Button Clicked", movie);
    const movies = this.state.movies.filter((m) => m._id != movie._id);
    //Syntax diatas untuk menampilkan movie yang tidak di KLIK DELETE saja!
    this.setState({ movies });
    // update state dengan cara menimpa state object sebelumnya
    // state sebelumnya = menampilkan seluruh movies
  };
  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <p>There are no movies shown</p>;
    return (
      <React.Fragment>
        <p>Showing {count} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
