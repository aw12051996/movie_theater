import React, { Component } from "react";
import { Container, Row, Col, Badge, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

// redux
import { connect } from "react-redux";
import { showCities } from "../_actions/cinemaActions";

class Cinemas extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     city: ""
  //   };
  // }

  // handleClick = city => () => {
  //   this.setState({
  //     city: city
  //   });
  // };

  componentDidMount() {
    this.props.showCities();
  }

  render() {
    const { cities } = this.props;
    // const cinema = cities;
    // console.log(cinema);

    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3>
              <FaMapMarkerAlt />
              Location
            </h3>
            <div className="p-2">
              {cities.map((item, index) => (
                <Button
                  tag={Link}
                  to={`/cinemas`}
                  // onClick={this.handleClick(item.city)}
                  className="mr-2"
                  outline
                  color="info"
                  key={index}
                >
                  {item.name_city}
                  <Badge className="p-1 m-1">{}</Badge>
                </Button>
              ))}
            </div>
            <div>jsalkj</div>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cities: state.cinemas.cities
});

export default connect(mapStateToProps, { showCities })(Cinemas);
