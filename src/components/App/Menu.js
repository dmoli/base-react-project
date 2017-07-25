import React, { Component } from 'react';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';

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
        <span className='burger-button icon-menu' onClick={this.handleOpenMenu}></span>
        <nav className={this.state.open ? 'menu active' : 'menu'}>
          <ul>
            <li>
              <Link href='/'>
                <a>
                  <FormattedMessage
                    id='link.home'
                    defaultMessage='Hi link home'
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href='/post'>
                <a>
                  <FormattedMessage
                    id='link.post'
                    defaultMessage='Hi link post'
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href='/rebass'>
                <a>
                  <FormattedMessage
                    id='link.rebass'
                    defaultMessage='Hi link rebass'
                  />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
