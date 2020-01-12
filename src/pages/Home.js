import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { FaPlayCircle, FaCalendarAlt } from "react-icons/fa";
// components
import ListItem from "./../components/ListItem";

// redux
import { connect } from "react-redux";
import { showMovies } from "../_actions/movieActions";
class Home extends Component {
  componentDidMount() {
    this.props.showMovies();
  }
  render() {
    const { movies } = this.props;
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3>
              <FaPlayCircle className="mr-2" />
              Now Playing
            </h3>
            {movies.map((item, index) => (
              <ListItem
                key={index}
                id={item.id}
                image={item.image}
                title={item.name_movie}
              />
            ))}
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h3>
              <FaCalendarAlt className="mr-2" />
              Coming Soon
            </h3>
            {movies.map((item, index) => (
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
  movies: state.movies.movies
});

export default connect(mapStateToProps, { showMovies })(Home);
