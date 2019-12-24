import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { connect } from 'react-redux';

import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.svg';

function Header({ cartItens }) {
   return (
      <Container>
         <Link to="/">
            <img src={logo} alt="Rocketshoes" />
         </Link>

         <Cart to="/cart">
            <div>
               <strong>Meu Carrinho</strong>
               <span>{cartItens} itens</span>
            </div>
            <FiShoppingCart size={36} color="#FFF" />
         </Cart>
      </Container>
   );
}

export default connect(state => ({
   cartItens: state.cart.length,
}))(Header);
