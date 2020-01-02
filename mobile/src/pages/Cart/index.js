import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/formatPrice';
import colors from '../../styles/colors';

import {
  Container,
  ProductsContainer,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDeleteButton,
  ProductControl,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  FinishOrder,
  OrderText,
  EmptyContainer,
  EmptyText,
} from './styles';

export default function Cart() {
  const products = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
      priceFormatted: formatPrice(product.price),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce(
        (sumTotal, product) => sumTotal + product.price * product.amount,
        0
      )
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      {products.length ? (
        <>
          <ProductsContainer>
            {products.map(product => (
              <Product key={product.id}>
                <ProductInfo>
                  <ProductImage source={{ uri: product.image }} />

                  <ProductDetails>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>{product.priceFormatted}</ProductPrice>
                  </ProductDetails>

                  <ProductDeleteButton
                    onPress={() =>
                      dispatch(CartActions.removeFromCart(product.id))
                    }
                  >
                    <Icon name="delete" size={26} color={colors.primary} />
                  </ProductDeleteButton>
                </ProductInfo>

                <ProductControl>
                  <ProductControlButton onPress={() => decrement(product)}>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color={colors.primary}
                    />
                  </ProductControlButton>

                  <ProductAmount value={String(product.amount)} />

                  <ProductControlButton onPress={() => increment(product)}>
                    <Icon
                      name="add-circle-outline"
                      size={20}
                      color={colors.primary}
                    />
                  </ProductControlButton>

                  <ProductSubtotal>{products.subtotal}</ProductSubtotal>
                </ProductControl>
              </Product>
            ))}
          </ProductsContainer>

          <TotalContainer>
            <TotalText>Total</TotalText>

            <TotalAmount>{total}</TotalAmount>

            <FinishOrder>
              <OrderText>Finalizar Pedido</OrderText>
            </FinishOrder>
          </TotalContainer>
        </>
      ) : (
        <EmptyContainer>
          <Icon name="remove-shopping-cart" size={72} color="#eee" />
          <EmptyText>Seu carrinho está vazio</EmptyText>
        </EmptyContainer>
      )}
    </Container>
  );
}
