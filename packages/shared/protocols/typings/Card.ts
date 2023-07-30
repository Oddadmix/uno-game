export type CardColors = 'yellow' | 'green' | 'red';

export type CardTypes =
  | '-1'
  | '0'
  | '1'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | 'screw'
  | 'exchange'
  | 'all'
  | 'basra';

type ColorMap = {
  [key in CardColors]?: string;
};

export type CardData = {
  id: string;
  src: string;
  name: string;
  color: CardColors;
  type: CardTypes;
  canBeUsed?: boolean;
  /**
   * If the card can be mixed with other cards of same type
   */
  canBeCombed?: boolean;
  selectedColor?: CardColors;
  possibleColors?: ColorMap;
  show?: boolean;
};

export type CurrentCardCombo = {
  cardTypes: Array<CardTypes>;
  amountToBuy: number;
};
