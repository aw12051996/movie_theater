import React, { Component } from "react";
import { Row, Col, Card, CardFooter, CardImg } from "reactstrap";
import { Link } from "react-router-dom";
class ListItem extends Component {
  render() {
    return (
      <div className="album m-2">
        <Row>
          <Col lg={3} md={4} sm={6} xs={12} className="p-1">
            <Card tag={Link} to={`/detail/${this.props.id}`}>
              <CardImg
                top
                width="100%"
                src={this.props.image}
                alt="Card image cap"
              />
              <CardFooter>
                <h5 className="text-center">{this.props.title}</h5>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ListItem;
