import styled from 'styled-components/native';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.dark};
`;

export const ProductContainer = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 5px;
  width: 250px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  margin: 14px auto;
  font-weight: bold;
  font-size: 22px;
`;

export const AddButton = styled.TouchableOpacity`
  background: ${colors.primary};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductsOnCart = styled.View`
  background: ${darken(0.05, colors.primary)};
  padding: 12px;
  flex-direction: row;
  align-items: center;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0 4px 0 10px;
  font-size: 15px;
  font-weight: bold;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
