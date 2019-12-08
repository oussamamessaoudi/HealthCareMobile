import React from 'react';

export interface IProps {
  type?: ETextType;
  size?: ESize;
  textAlign?: ETextAlign;
  style?: React.ReactNode;
  numberOfLines?: number;
  children: any;
}

export enum ETextType {
  PRIMARY,
  SECONDARY,
}
export enum ESize {
  XS,
  S,
  M,
  L,
}
export enum ETextAlign {
  CENTER,
  LEFT,
  RIGHT,
}
