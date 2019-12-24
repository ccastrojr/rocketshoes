import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  margin: 15px;
`;

export const ProductsContainer = styled.View``;

export const Product = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const ProductTitle = styled.Text`
  text-align: left;
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin-top: 5px;
`;

export const ProductDeleteButton = styled.TouchableOpacity`
  padding: 6px;
`;

export const ProductControl = styled.View`
  flex-direction: row;
  align-items: center;
  background: #eee;
  padding: 8px;
  border-radius: 4px;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 0 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
  text-align: center;
  font-weight: bold;
`;

export const ProductSubtotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
  flex: 1;
  text-align: center;
`;

export const TotalContainer = styled.View`
  margin-top: 15px;
  align-items: center;
  justify-content: center;
`;

export const TotalText = styled.Text`
  color: #9e9e9e;
  font-weight: bold;
  font-size: 22px;
  text-transform: uppercase;
`;

export const TotalAmount = styled.Text`
  color: #212121;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const FinishOrder = styled.TouchableOpacity`
  background: ${colors.primary};
  padding: 12px 20px;
  border-radius: 6px;
  margin-bottom: 5px;
`;

export const OrderText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
`;

export const EmptyContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin: 5px 0;
`;

export const EmptyText = styled.Text`
  font-size: 26px;
  font-weight: bold;
  margin-top: 18px;
  color: #212121;
`;
