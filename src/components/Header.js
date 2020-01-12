import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaFilm } from "react-icons/fa";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

// components
import MenuProfile from "./MenuProfile";
import Login from "./Login";

// redux
import { connect } from "react-redux";
import { showCategories } from "../_actions/categoryActions";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  componentDidMount() {
    this.props.showCategories();
  }
  render() {
    const isLogged = localStorage.getItem("isLogged");
    const level = localStorage.getItem("level");
    const { categories } = this.props;
    return (
      <Navbar color="info" light expand="md" sticky="top">
        <NavbarBrand href="/">
          <FaFilm size="2em" className="mr-1 mt-n1" />
          CLUB
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Genre
              </DropdownToggle>
              <DropdownMenu right>
                {categories.map((item, index) => (
                  <DropdownItem tag={Link} to={`/genre/${item.id}`} key={index}>
                    {item.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink tag={Link} to="/cinemas">
                Cinemas
              </NavLink>
            </NavItem>
            {level === "admin" ? (
              <NavItem>
                <NavLink tag={Link} to="/cinemas">
                  Add Moive
                </NavLink>
              </NavItem>
            ) : (
              ""
            )}
          </Nav>
          {isLogged ? <MenuProfile level={level} /> : <Login />}
        </Collapse>
      </Navbar>
    );
  }
}
const mapStateToProps = state => ({
  categories: state.categories.categories
});

export default connect(mapStateToProps, { showCategories })(Header);
