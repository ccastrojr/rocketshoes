import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';

import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.svg';

export default function Header() {
   const cartSize = useSelector(state => state.cart.length);

   return (
      <Container>
         <Link to="/">
            <img src={logo} alt="Rocketshoes" />
         </Link>

         <Cart to="/cart">
            <div>
               <strong>Meu Carrinho</strong>
               <span>{cartSize} itens</span>
            </div>
            <FiShoppingCart size={36} color="#FFF" />
         </Cart>
      </Container>
   );
}
