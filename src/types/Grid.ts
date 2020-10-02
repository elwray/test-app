import {Item} from './Item';

export interface Grid {
  items: Item[];
  rows: number;
  columns: number;
}