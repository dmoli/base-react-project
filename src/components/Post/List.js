import React, { Component } from 'react';

import Item from './Item';

class List extends Component {
  render() {
    return (
      <section className='juegos-container'>
        {this.props.posts
          .map(post => (
            <Item key={post.id} {...post} />
          ))
        }
        <style global jsx>{`
          .main section article {
              margin: 0px auto 30px auto;
          }

          section.juegos-container > article {
              display: flex;
              background: rgb(235, 238, 241);
          }

          section.juegos-container > article section {
              flex: 1;
              padding-top: 18px;
              padding-left: 18px;
              padding-bottom: 18px;
          }

          section.juegos-container article section p:first-child {
              font-size: 2rem;
              color: #4c4c4c !important;
          }

          section.juegos-container article section p {
              margin: 0px 0px 10px 0px;
              font-size: 1.5rem;
              color: #4c4c4c;
          }

          section.juegos-container p.juego-consola {
              font-size: 1rem !important;
              margin: 7px 0px 0px 0px !important;
          }

          section.juegos-container p.juego-precio-antes {
              font-size: 1rem !important;
              text-decoration: line-through;
              margin: 0px 0px 3px 0px !important;
              color: #777 !important;
          }

          section.juegos-container p.juego-precio{
            background: rgb(208, 64, 58);
            color: #fff;
            display: inline-block;
            padding: 4px 7px;
            border-radius: 4px;
          }

          section.juegos-container img.juego-imagen{
            /*width: auto;*/
          }

          section.juegos-container article.juego-whatsapp {
              margin: 16px 0px 0px 0px !important;
          }

          section.juegos-container article.juego-whatsapp span.icon-whatsapp{
            color: #2480ff !important;
            margin: 0px 3px 0px 0px;
          }

          .buscador {
            background: green;
          }
        `}</style>
      </section>
    );
  }
}

export default List;
