import React, { Component } from "react";
import { Container, Row, Col, Button, Tooltip } from "reactstrap";
import { Link } from "react-router-dom";
// components

// redux
import { connect } from "react-redux";
import { showMoviesById } from "../_actions/movieActions";

class DetailMovie extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  componentDidMount() {
    // const level = localStorage.getItem("level");
    const id = this.props.match.params.id;
    this.props.showMoviesById(id);
  }
  render() {
    const { moviesById } = this.props;
    const isLogged = localStorage.getItem("isLogged");

    return (
      <Container className="mt-2">
        <Row>
          <Col lg={8} className="mx-auto"></Col>
        </Row>
        <Row>
          <Col lg={4} md={4} sm={4}>
            <img src={moviesById.image} width="100%" alt="" />
          </Col>
          <Col lg={8} md={8} sm={8}>
            <iframe
              src={moviesById.url}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="p-2">
            <h4>
              {moviesById.name_movie}
              {isLogged ? (
                <Button
                  tag={Link}
                  to={`/order/${moviesById.id}`}
                  outline
                  color="success"
                  className="ml-2"
                >
                  Buy
                </Button>
              ) : (
                <span>
                  <a
                    tag={Link}
                    to="#"
                    className="btn btn-outline-success outline ml-2"
                    id="TooltipExample"
                    style={{ textDecoration: "none" }}
                  >
                    Buy
                  </a>
                  <Tooltip
                    placement="right"
                    isOpen={this.state.tooltipOpen}
                    target="TooltipExample"
                    toggle={this.toggle}
                  >
                    You must login
                  </Tooltip>
                </span>
              )}
            </h4>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={4} sm={4}>
            <h6>Detail</h6>
            <p>Starring : {moviesById.starring}</p>
            <p>Director : {moviesById.director}</p>
            <p>Duration : {moviesById.duration}</p>
          </Col>
          <Col lg={8} md={8} sm={8}>
            <h6>Sinopsis</h6>
            <p>{moviesById.desc}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  moviesById: state.movies.moviesById
});

export default connect(mapStateToProps, { showMoviesById })(DetailMovie);
