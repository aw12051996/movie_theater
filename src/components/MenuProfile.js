import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
class MenuProfile extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle className="bg-transparent" color="black">
          <span className="mr-2">{this.props.level}</span>
          <img
            src="https://media.squawka.com/images/en/2019/05/19124907/rsz_pa-20104101-e1558266564609-940x530.jpg"
            alt=""
            className="rounded-circle"
            width="40px"
            height="40px"
          />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <Link to="/profile" alt="">
              Profile
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/my_ticket" alt="">
              My Ticket
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/payment" alt="">
              Payment
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/add_event" alt="">
              Add Event
            </Link>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <Link to="#" alt="" onClick={this.handleLogout}>
              Logout
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default MenuProfile;
