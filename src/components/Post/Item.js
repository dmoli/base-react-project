import React, { Component } from 'react';
import { FormattedRelative } from 'react-intl';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

class Item extends Component {
  render() {
    return (
      <div>
        <GameItem>
          <img
            width='305'
            height='350'
            className='juego-imagen'
            data-src='images/juegos/prueba-juego.jpg|images/juegos/prueba-juego.jpg'
          />
          <GameInfoContainer>
            <GameName>{this.props.title}</GameName>
            <GamePrice>$ {this.props.id}</GamePrice>
            <GamePriceAfter>$ {this.props.id}</GamePriceAfter>
            <p>
              <FormattedRelative
                value={Date.now()}
                updateInterval={36000}
              />
            </p>
            <GameWsContainer>
              <GameWsIcon className='icon-whatsapp' />
              <a href='tel:+55951098779'>+569 5109 8779</a>
            </GameWsContainer>
          </GameInfoContainer>
        </GameItem>
      </div>
    );
  }
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

const GameItem = styled.article`
  margin: 0px auto 30px auto;
  display: flex;
  background: rgb(235, 238, 241);
`;

const GameInfoContainer = styled.section`
  flex: 1;
  padding-top: 18px;
  padding-left: 18px;
  padding-bottom: 18px;
`;

const GameInfoItem = styled.p`
  margin: 0px 0px 10px 0px;
  font-size: 1.5rem;
  color: #4c4c4c;
`;

const GameName = GameInfoItem.extend`
  font-size: 2rem;
`;

const GamePrice = styled.p`
  font-size: 1rem !important;
  text-decoration: line-through;
  margin: 0px 0px 3px 0px !important;
  color: #777 !important;
`;

const GamePriceAfter = styled.p`
  background: rgb(208, 64, 58);
  color: #fff;
  display: inline-block;
  padding: 4px 7px;
  border-radius: 4px;
`;

const GameWsContainer = styled.article`
  margin: 16px 0px 0px 0px !important;
`;

const GameWsIcon = styled.span`
  color: #2480ff !important;
  margin: 0px 3px 0px 0px;
`;

export default Item;
