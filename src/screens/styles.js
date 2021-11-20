import styled from 'styled-components/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import Constants from 'expo-constants';

export const Container = styled.View`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: ${Constants.statusBarHeight}px;
  background-color: #F6F6F6;
`;

export const Header = styled.View`
  background-color: #506AD4;
  width: 100%;
  height: ${RFValue(60)}px;
  display: flex;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(25)}px;
  margin-left: 10px;
  color: #FFFFFF;
`;

export const InputContainer = styled.View`
  margin-top: 30px;
  height: ${RFValue(45)}px;
  width: 80%;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  border: 1px solid #000;
  border-radius: 5px;
`;

export const Input = styled.TextInput`

`;

export const AddButtonContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #506AD4;
  width: ${RFValue(45)}px;
  height: ${RFValue(45)}px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Icon = styled(FontAwesome5)`
  font-size: ${RFValue(25)}px;
  color: #FFF;
`;

export const TasksFlatlist = styled.FlatList`
  margin-top: 30px;
  width: 80%;
`;

export const TaskTitle = styled.Text`
  font-size: ${RFValue(18)}px;
`;

export const TaskContainer = styled.View`
  width: 100%;
  height: ${RFValue(45)}px;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 5px;
`;

export const RemoveButtonContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${RFValue(45)}px;
  height: ${RFValue(45)}px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #FF0000;
`;
