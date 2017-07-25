import React, { Component } from 'react';
import { FormattedRelative } from 'react-intl';

class Item extends Component {
  render() {
    return (
      <div>
        <article className='juegos-item'>
          <img
            width='305'
            height='350'
            className='juego-imagen'
            data-src='images/juegos/prueba-juego.jpg|images/juegos/prueba-juego.jpg'
          />
          <section>
            <p className='juego-nombre'>{this.props.title}</p>
            <p className='juego-precio-antes'>$ {this.props.id}</p>
            <p className='juego-precio'>$ {this.props.id}</p>
            <p>
              <FormattedRelative
                value={Date.now()}
                updateInterval={36000}
              />
            </p>
            <article className='juego-whatsapp'>
              <span className='icon-whatsapp'></span>
              <a href='tel:+55951098779'>+569 5109 8779</a>
            </article>
          </section>
        </article>
      </div>
    );
  }
}

export default Item;
