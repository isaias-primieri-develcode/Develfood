import React, {useState} from 'react';
import {Image, TextInputProps, View} from 'react-native';
import {useTheme} from 'styled-components';
import {
  ValueInput,
  ViewInput,
  InputIcon,
  HiddenPassword,
} from './input.component.style';


interface PlateProps {
  id: number;
  price: number;
}
interface CartItemProps {
  plate: PlateProps;
  quantity: number;
  observation: string;
  price: number;
  photo: string;
  name: string;
}

interface Props extends TextInputProps {
  placeholder: string;
  source: string;
  onBlurProp?: (value: any) => void;
  handleChangeProp?: (value: string) => void;
  valueProp?: string;
  keyboradTypeProp?: any;
}

export function PhoneInput({
  placeholder,
  source,
  handleChangeProp,
  onBlurProp,
  keyboradTypeProp,
  valueProp,
}: Props) {
  return (
    <ViewInput>
      <InputIcon source={source} />
      <ValueInput
        type="cel-phone"
        options={{maskType: 'BRL', withDDD: true, dddMask: '(99) '}}
        placeholder={placeholder}
        onChangeText={handleChangeProp}
        value={valueProp}
        onBlur={onBlurProp}
        keyboardType={keyboradTypeProp}
      />
    </ViewInput>
  );
}
