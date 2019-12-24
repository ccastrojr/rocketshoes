import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Wrapper,
  Container,
  Logo,
  NavCart,
  CartItens,
  NavHome,
} from './styles';

function Header({ navigation, cartSize }) {
  Header.propTypes = {
    navigation: PropTypes.shape().isRequired,
    cartSize: PropTypes.number.isRequired,
  };

  return (
    <Wrapper>
      <Container>
        <NavHome onPress={() => navigation.navigate('Home')}>
          <Logo />
        </NavHome>

        <NavCart onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <CartItens>{cartSize || 0}</CartItens>
        </NavCart>
      </Container>
    </Wrapper>
  );
}

export default connect(
  state => ({
    cartSize: state.cart.length,
  }),
  null
)(Header);
