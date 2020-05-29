import React, { Component } from "react";

class App extends Component {
  state = {
    email: "",
    password: "",
    isValidEmail: false,
    isValidPassword: false,
    emailGuide: "",
    passwordGuide: "A",
  };

  checkValid = (value, name) => {
    let isValid = false;
    let guideMessage = "";

    switch (name) {
      case "email":
        console.log("email validation");
        if (value.includes("@")) {
          isValid = true;
          guideMessage = "";
        } else {
          isValid = false;
          guideMessage = "@ required";
        }
        this.setState({
          isValidEmail: isValid,
          emailGuide: guideMessage,
        });
        break;
      case "password":
        console.log("password validation");
        if (value.length < 7) {
          isValid = false;
          guideMessage = "min lenth 6";
        } else if (value.match(/[A-Z]/)) {
          isValid = true;
          guideMessage = "";
        } else {
          isValid = false;
          guideMessage = "uppercase letter required";
        }
        this.setState({
          isValidPassword: isValid,
          passwordGuide: guideMessage,
        });
        break;
      default:
        console.log("sorry, wrong param");
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
    this.checkValid(value, name);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("좋았어~");
  };

  render() {
    const { isValidEmail, isValidPassword } = this.state;
    return (
      <div>
        <h3>homework #1</h3>
        <form>
          <div>
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            {!this.state.isValidEmail && <label>{this.state.emailGuide}</label>}
          </div>
          <div>
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            {!this.state.isValidPassword && (
              <label>{this.state.passwordGuide}</label>
            )}
          </div>
          <div>
            <button
              disabled={!isValidEmail || !isValidPassword}
              onClick={this.handleSubmit}
            >
              submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default App;
