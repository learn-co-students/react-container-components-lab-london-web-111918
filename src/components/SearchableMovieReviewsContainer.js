import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Ao8lGLBqrZnprZ59unRMISB9Qbp8zHJI';
const URL = (query) => `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${query}&api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(URL(this.state.searchTerm))
      .then(resp => resp.json())
      .then(data => this.setState({ reviews: data.results }))
  }

  handleChange = (e) => {
    const query = e.target.form[0].value
    this.setState({ searchTerm: query })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="query" placeholder="search" value={this.state.searchTerm} />
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer