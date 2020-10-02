import React, {FC, useState} from 'react';
import AppContext, {ApplicationContextType} from './AppContext';
import {Grid, createItem} from '../types/';
import {RowsCount, ColsCount} from '../constants';

const getInitialGridState: Grid = {
  items: [...Array(RowsCount * ColsCount).fill(createItem())],
  rows: RowsCount,
  columns: ColsCount
};

export const AppContextProvider: FC = (props) => {
  const [value, setValue] = useState(getInitialGridState);

  const getContext = (): ApplicationContextType => ({
    grid: value,
    updateItem: (i, data) => {
      const newItems = [...value.items];
      newItems[i] = data;
      setValue({...value, items: newItems});
    }
  });

  return (
    <AppContext.Provider value={getContext()}>
      {props.children}
    </AppContext.Provider>
  )
}