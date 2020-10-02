import React from 'react';
import {Grid} from '../types/Grid';
import {Item} from '../types/Item';

export interface ApplicationContextType {
  grid: Grid;
  updateItem(id: number, data: Item): void;
}

const getDefaultState = (): ApplicationContextType => {
  return {
    grid: {
      items: [],
      rows: 0,
      columns: 0
    },
    updateItem: () => {},
  }
};

const AppContext = React.createContext<ApplicationContextType>(getDefaultState());
export default AppContext;