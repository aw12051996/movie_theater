import React, { Component } from "react";

// redux
import { connect } from "react-redux";
import { showMoviesById } from "../_actions/movieActions";

class Order extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.showMoviesById(id);
  }
  render() {
    const { moviesById } = this.props;
    return (
      <div>
        <h3>{moviesById.name_movie}</h3>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  moviesById: state.movies.moviesById
});

export default connect(mapStateToProps, { showMoviesById })(Order);
