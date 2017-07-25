import Head from 'next/head';
import { defineMessages, injectIntl } from 'react-intl';

import Menu from './Menu';

const messages = defineMessages({
  title: {
    id: 'page.title',
    defaultMessage: 'React Intl Next.js Example',
  },
});

export default injectIntl(({ intl, title, children }) => (
  <div className='layout'>
    <Head>
      <title>{ title || intl.formatMessage(messages.title) }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header className='header'>
      <figure>
        <img src="/static/logo.png"
          width="157"
          height="127"
          alt="Logo Primer Player" />
      </figure>
      <Menu />
    </header>
    <div className='main'>
      <section className='buscador-container'>
        <input className='buscador' type='text' placeholder='Busca tu juego...' />
        <span className='icon-search'></span>
      </section>
      { children }
    </div>

    <footer className='footer'>
      {'I`m here to stay'}
    </footer>

    <style global jsx>{`
      * { box-sizing: border-box; }
      
      body { margin: 0; }

      * {
        font-size: 15px;
      }

      a {
        text-decoration: none;
        color: #2480ff;
      }

      a:hover {
        text-decoration: underline;
        cursor: pointer;
      }

      /* iconos */
      @font-face {
        font-family: 'icomoon';
        src:  url('static/fonts/icomoon.eot?i6adtn');
        src:  url('static/fonts/icomoon.eot?i6adtn#iefix') format('embedded-opentype'),
          url('static/fonts/icomoon.ttf?i6adtn') format('truetype'),
          url('static/fonts/icomoon.woff?i6adtn') format('woff'),
          url('static/fonts/icomoon.svg?i6adtn#icomoon') format('svg');
        font-weight: normal;
        font-style: normal;
      }

      * {
        font-family: 'Montserrat', sans-serif;
      }

      [class^="icon-"], [class*=" icon-"] {
        /* use !important to prevent issues with browser extensions that change fonts */
        font-family: 'icomoon' !important;
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        /* Better Font Rendering =========== */
        -webkit-font-smoothing: antialiased;
        color: #fff;
        -moz-osx-font-smoothing: grayscale;
      }

      .icon-search:before {
        content: "\\e986";
      }

      .icon-menu:before {
        content: "\\e9bd";
      }

      .icon-close:before {
        content: "\\ea0f";
      }

      .icon-whatsapp:before {
        content: "\\ea93";
      }

      .burger-button{
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
      }

      // header
      header {
        text-transform: uppercase;
        position: relative;
        padding: 0px;
        text-align: center;
        background: #fff;
        width: 80%;
        max-width: 1024px;
        margin: 0px auto;
      }

      figure.logotipo {
          margin: 0;
          display: inline-block;
          width: 165px;
      }

      nav.menu {
        position: absolute;
        right: 0;
        top: 41px;
        margin-right: 0;
        padding-right: 7px;
      }

      nav.menu ul {
        list-style: none;
      }

      nav.menu ul li {
        margin-right: 26px;
        display: inline-block;
      }

      nav.menu ul li:last-child {
          margin-right: 0px;
      }

      nav.menu.active {
        left: 0;
      }

      // main
      .main {
        min-height: 800px;
        width: 80%;
        max-width: 1024px;
        margin: 0 auto;
      }

      .main section.buscador-container {
        padding: 11px 0 0;
        display: flex;
        position: relative;
        margin-bottom: 14px;
      }

      .main section.buscador-container span.icon-search {
        position: absolute;
        right: 13px;
        top: 26px;
      }

      .main section.buscador-container input[type="text"] {
        text-transform: uppercase;
        padding: 14px 9px;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        margin: 0;
        flex: 1 1 100%;
        background: #2480ff;
        width: 100%;
        color: #fff;
      }

      .buscador-container input.buscador::-webkit-input-placeholder { color: #fff; }
      .buscador-container input.buscador:-moz-placeholder { color: #fff; }
      .buscador-container input.buscador::-moz-placeholder { color: #fff; }
      .buscador-container input.buscador:-ms-input-placeholder { color: #fff; }

      .footer {
        margin: 20px;
        padding: 20px;
        border: 1px solid #DDD;
      }

      /* cuando se muestra el menu responsive */
      @media all and (max-width: 704px) {
        /*
        ** menu
        */
        header {
          position: static;
        }

        nav.menu {
          width: 100%;
          top: 0;
          left: -100%;
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

        nav.menu.active {
          left: 0;
        }

        nav.menu ul {
          list-style: none;
          flex: 1;
          padding: 0;
        }

        nav.menu ul li {
          display: block;
          text-align: center;
          margin: 0;
          border-bottom: 1px solid #fff;
          padding: 14px 0;
        }

        nav.menu ul li:nth-child(1){
          border-top:  1px solid #fff;
        }

        nav.menu ul li a{
          color: #fff;
        }

        .burger-button{
          display: block;
        }
      }
    `}</style>
  </div>
));
