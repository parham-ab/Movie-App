import React from "react";
import Link from "next/link";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link href={"/"}>
          <Navbar.Brand href={"/"}>Top 250</Navbar.Brand>
        </Link>
        <Link href={"/movies"}>
          <Navbar.Brand href={"/movies/popular"}>Top Popular</Navbar.Brand>
        </Link>
        <Link href={"/movies/search"}>
          <Navbar.Brand href={"/movies/search"}>Search</Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
