import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Nav = styled.nav`
  background: #0b7285;
  color: #fff;
  padding: 16px;
`;

const NavInner = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 700;
`;

const Menu = styled.div`
  display: flex;
  gap: 16px;
  a { color: #e6fcf5; text-decoration: none; }
`;

const Header = () => {
  return (
    <Nav>
      <NavInner>
        <Brand to="/">Agência Viagens Incríveis</Brand>
        <Menu>
          <Link to="/">Home</Link>
          <Link to="/contato">Contato</Link>
        </Menu>
      </NavInner>
    </Nav>
  );
};

export default Header;


