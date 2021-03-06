import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';
import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';
import { formatPrice } from '../../util/formatPrice';

import {
  Container,
  ProductContainer,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductsOnCart,
  ProductAmountText,
  AddButtonText,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    getProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  function renderProduct({ item }) {
    return (
      <ProductContainer key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.priceFormatted}</ProductPrice>
        <AddButton onPress={() => handleAddProduct(item.id)}>
          <ProductsOnCart>
            <Icon name="shoppingcart" color="#fff" size={20} />
            <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
          </ProductsOnCart>
          <AddButtonText>Adicionar</AddButtonText>
        </AddButton>
      </ProductContainer>
    );
  }

  return (
    <Container>
      <FlatList
        horizontal
        data={products}
        extraData={amount}
        keyExtractor={item => String(item.id)}
        renderItem={renderProduct()}
      />
    </Container>
  );
}
