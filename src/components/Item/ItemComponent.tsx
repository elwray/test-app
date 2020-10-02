import React, {FC} from 'react';
import './../../App.css';
import {Item} from '../../types/Item';
import CSS from 'csstype';

const itemStyle: CSS.Properties = {
  width: '80px',
  height: '80px',
  borderWidth: '1px',
  borderStyle: 'solid',
  textAlign: 'center',
  lineHeight: '80px'
};

interface Props {
  id: number;
  onClick?(): void;
  item: Item;
};

export const ItemComponent: FC<Props> = ({item, onClick, id}) =>
  <div onClick={onClick} className="noselect"
       style={{...itemStyle, backgroundColor: item.backgroundColor, borderColor: item.borderColor}}>
    {item.text ?? id}
  </div>;