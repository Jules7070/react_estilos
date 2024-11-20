import React, { Component } from "react";
import { FooterContainer } from "../styles/FooterStyles";

class Footer extends Component {
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <FooterContainer>
        <p>&copy; {currentYear} My App</p>
      </FooterContainer>
    );
  }
}

export default Footer;

