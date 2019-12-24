import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

function Cart({ products, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
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
                    onPress={() => removeFromCart(product.id)}
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

const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
    priceFormatted: formatPrice(product.price),
  })),
  total: formatPrice(
    state.cart.reduce(
      (total, product) => total + product.price * product.amount,
      0
    )
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
