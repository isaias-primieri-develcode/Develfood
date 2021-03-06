import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(56)}px;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #2B2B2E;
  font-weight: 500;
  text-align: center;
`;

export const BackButton = styled.TouchableOpacity`
  width: 30px;
  align-items: center;
  margin-left: 16px;
  justify-content: center;
  height: 30px;
`;

export const TextView = styled.View`
  width: 100%;
  position: absolute;
  align-items: center;
`;
