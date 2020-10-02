export interface Item {
  backgroundColor?: string;
  borderColor?: string;
  text?: string;
}

export function createItem(backgroundColor: string = '#AABBCC', borderColor: string = '#999999'): Item {
  return {
    backgroundColor,
    borderColor
  }
}