export interface Item {
  backgroundColor?: string;
  borderColor?: string;
  text?: string;
}

export function createItem(backgroundColor: string = '#AABBCC', borderColor: string = '#00FF11'): Item {
  return {
    backgroundColor,
    borderColor
  }
}