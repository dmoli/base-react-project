/* eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }] */
import Head from 'next/head';
import { defineMessages, injectIntl } from 'react-intl';
import styled, { injectGlobal } from 'styled-components';

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
    <Header>
      <Logotipo>
        <img src="/static/logo.png"
          width="157"
          height="127"
          alt="Logo Primer Player" />
      </Logotipo>
      <Menu />
    </Header>
    <Main>
      <SearchContainer>
        <SearchInput
          className='buscador'
          type='text'
          placeholder='Busca tu juego...'
        />
        <SearchIcon className='icon-search' />
      </SearchContainer>
      { children }
    </Main>

    <Footer>
      {'I`m here to stay'}
    </Footer>
  </div>
));

injectGlobal`
  * {
    box-sizing: border-box;
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
  }

  body { margin: 0; }

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

  [class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
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

  /* main */
  input.buscador::-webkit-input-placeholder { color: #fff; }
  input.buscador:-moz-placeholder { color: #fff; }
  input.buscador::-moz-placeholder { color: #fff; }
  input.buscador:-ms-input-placeholder { color: #fff; }
`;

const Header = styled.header`
  text-transform: uppercase;
  position: relative;
  padding: 0px;
  text-align: center;
  background: #fff;
  width: 80%;
  max-width: 1024px;
  margin: 0px auto;
  @media all and (max-width: 704px) {
    position: static;
  }
`;

const Logotipo = styled.figure`
  margin: 0;
  display: inline-block;
  width: 165px;
`;

const Main = styled.div`
  min-height: 800px;
  width: 80%;
  max-width: 1024px;
  margin: 0 auto;
`;

const SearchContainer = styled.section`
  padding: 11px 0 0;
  display: flex;
  position: relative;
  margin-bottom: 14px;
`;

const SearchInput = styled.input`
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
`;

const SearchIcon = styled.span`
  position: absolute;
  right: 13px;
  top: 26px;
`;

const Footer = styled.footer`
  margin: 20px;
  padding: 20px;
  border: 1px solid #DDD;
`;
