import React, { useSelector } from 'react';
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

export default function Header({ navigation }) {
  Header.propTypes = {
    navigation: PropTypes.shape().isRequired,
  };

  const cartSize = useSelector(state => state.cart.length);

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
