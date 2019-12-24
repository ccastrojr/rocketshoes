import styled from 'styled-components/native';
import colors from '../../styles/colors';

import logo from '../../assets/logo.png';

export const Wrapper = styled.SafeAreaView`
  background: ${colors.dark};
  flex-direction: row;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;

export const NavHome = styled.TouchableOpacity`
  flex: 1;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const NavCart = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const CartItens = styled.Text`
  position: absolute;
  text-align: center;
  font-weight: bold;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: ${colors.primary};
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 10px;
  overflow: hidden;
`;
