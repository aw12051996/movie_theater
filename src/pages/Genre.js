import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

// components
import ListItem from "./../components/ListItem";

// redux
import { connect } from "react-redux";
import { showMoviesByCategory } from "../_actions/movieActions";

class Genre extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.showMoviesByCategory(id);
  }
  render() {
    const { moviesByCategory } = this.props;
    const movies = moviesByCategory.movies;
    // console.log(movies);
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h1>{moviesByCategory.name}</h1>
            {movies &&
              movies.map((item, index) => (
                <ListItem
                  key={index}
                  id={item.id}
                  image={item.image}
                  title={item.name_movie}
                />
              ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  moviesByCategory: state.movies.moviesByCategory
});

export default connect(mapStateToProps, { showMoviesByCategory })(Genre);
