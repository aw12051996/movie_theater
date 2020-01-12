import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Alert
} from "reactstrap";
import { FaUser, FaKey, FaAt } from "react-icons/fa";
import axios from "axios";
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      dd1: false,
      modal1: false,
      modal2: false,
      email: "",
      password: "",
      username: "",
      errorMsg: "",
      error: false
    };
    this.dropdownToggle = this.dropdownToggle.bind(this);
  }

  // toggle modal
  dropdownToggle() {
    this.setState({
      dd1: !this.state.dd1
    });
  }
  closeModal(tabId) {
    this.setState({
      [tabId]: false
    });
  }
  showModal(modal) {
    this.setState({
      [modal]: true
    });
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmitLogin = () => {
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: true, errorMsg: "All input must be required" });
      return;
    } else {
      axios
        .post("http://localhost:5000/api/v1/user/login", {
          email: this.state.email,
          password: this.state.password
        })
        .then(res => {
          const data = res.data;
          if (res.data.token) {
            this.setState({ error: false });
            localStorage.setItem("level", data.level);
            localStorage.setItem("token", data.token);
            localStorage.setItem("isLogged", true);
            window.location.reload();
          } else {
            this.setState({ error: true, errorMsg: data.message });
          }
        })
        .catch(err => {
          alert(err);
        });
    }
  };

  handleSubmitRegister = () => {
    const { email, password, username } = this.state;
    if (!email || !password || !username) {
      this.setState({ error: true, errorMsg: "All input must be required" });
      return;
    } else {
      axios
        .post("http://localhost:5000/api/v1/user/register", {
          email: this.state.email,
          password: this.state.password,
          username: this.state.username,
          level: "user"
        })
        .then(res => {
          const data = res.data;
          if (res.data.token) {
            this.setState({ error: false });
            localStorage.setItem("level", data.level);
            localStorage.setItem("token", data.token);
            localStorage.setItem("isLogged", true);
            window.location.reload();
          } else {
            this.setState({ error: true, errorMsg: data.message });
          }
        });
      // .catch(err => {
      //   alert(err);
      // });
    }
  };
  render() {
    const { error, errorMsg } = this.state;
    return (
      <div>
        <Button
          className="mr-2"
          color="light"
          onClick={this.showModal.bind(this, "modal1")}
        >
          Register
        </Button>
        <Button
          className="mr-2"
          color="light"
          onClick={this.showModal.bind(this, "modal2")}
        >
          Login
        </Button>

        {/* modal Register */}
        <Modal
          isOpen={this.state.modal1}
          toggle={this.closeModal.bind(this, "modal1")}
        >
          <ModalHeader toggle={this.closeModal.bind(this, "modal1")}>
            Register
          </ModalHeader>
          <ModalBody>
            {error ? <Alert color="danger">{errorMsg}</Alert> : ""}
            <Form className="p-2">
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <FaUser />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    onChange={this.handleInputChange}
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <FaAt />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    onChange={this.handleInputChange}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <FaKey />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    onChange={this.handleInputChange}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup className="text-center">
                <Button
                  className="btn-dark"
                  onClick={this.handleSubmitRegister}
                >
                  REGISTER
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
        {/* modal login */}
        <Modal
          isOpen={this.state.modal2}
          toggle={this.closeModal.bind(this, "modal2")}
        >
          <ModalHeader toggle={this.closeModal.bind(this, "modal2")}>
            Login
          </ModalHeader>
          <ModalBody>
            {error ? <Alert color="danger">{errorMsg}</Alert> : ""}
            <Form className="p-2">
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <FaUser />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={this.handleInputChange}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <FaKey />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={this.handleInputChange}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup className="text-center">
                <Button className="btn-dark" onClick={this.handleSubmitLogin}>
                  LOGIN
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Login;
