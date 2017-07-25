import React, { Component } from 'react';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
    this.handleOpenMenu = this.handleOpenMenu.bind(this);
  }

  handleOpenMenu() {
    let open = true;
    if (this.state.open) {
      open = false;
    }
    this.setState({ open });
  }

  render() {
    return (
      <div>
        <BurgerButton className='icon-menu' onClick={this.handleOpenMenu} />
        <NavMenu open={this.state.open}>
          <MenuContainer>
            <MenuItem>
              <Link href='/'>
                <Ancor>
                  <FormattedMessage
                    id='link.home'
                    defaultMessage='Hi link home'
                  />
                </Ancor>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href='/post'>
                <Ancor>
                  <FormattedMessage
                    id='link.post'
                    defaultMessage='Hi link post'
                  />
                </Ancor>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href='/rebass'>
                <Ancor>
                  <FormattedMessage
                    id='link.rebass'
                    defaultMessage='Hi link rebass'
                  />
                </Ancor>
              </Link>
            </MenuItem>
          </MenuContainer>
        </NavMenu>
      </div>
    );
  }
}

const BurgerButton = styled.span`
  width: 40px;
  border-radius: 50%;
  line-height: 40px;
  height: 40px;
  background: #2480ff;
  display: inline-block;
  text-align: center;
  position: fixed;
  left: 10px;
  top: 10px;
  cursor: pointer;
  z-index: 2;
  display: none;
  @media all and (max-width: 704px) {
    display: block;
  }
`;

const NavMenu = styled.nav`
  position: absolute;
  right: 0;
  top: 41px;
  margin-right: 0;
  padding-right: 7px;
  @media all and (max-width: 704px) {
      width: 100%;
      top: 0;
      left: -100%;
      left: ${props => (props.open ? '0' : '-100%')};
      bottom: 0;
      background: rgba(36, 128, 255, 0.83);
      display: flex;
      align-items: center;
      position: fixed;
      margin: 0;
      border-radius: 0;
      border: 0;
      padding: 0;
      transition: .3s;
      z-index: 1;
  }
`;

const MenuContainer = styled.ul`
  list-style: none;
  @media all and (max-width: 704px) {
    flex: 1;
    padding: 0;
  }
`;

const MenuItem = styled.li`
  margin-right: 26px;
  display: inline-block;
  &:last-child {
    border-bottom: 0;
    margin-right: 0px;
  }
  ${NavMenu}:hover & {
    text-decoration: underline;
  }
  @media all and (max-width: 704px) {
    display: block;
    text-align: center;
    margin: 0;
    border-bottom: 1px solid #fff;
    padding: 14px 0;
  }
`;

const Ancor = styled.a`
  @media all and (max-width: 704px) {
    color: #fff;
  }
`;

export default Menu;
