import React, { Component } from "react";
import { HeaderContainer } from "../styles/HeaderStyles";

class Header extends Component {
  componentDidMount() {
    console.log("Header mounted");
  }

  render() {
    return (
      <HeaderContainer>
        <h1>Ejemplo React con Estilos</h1>
      </HeaderContainer>
    );
  }
}

export default Header;

