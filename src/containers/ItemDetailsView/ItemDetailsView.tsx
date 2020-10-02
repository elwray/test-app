import React, {useContext, FC, useState, useCallback} from 'react';
import {useParams} from 'react-router-dom'
import AppContext from '../../contexts/AppContext';

interface ItemDetailsParams {
  id: string;
}

export const ItemDetailsView: FC = () => {
  const {id} = useParams<ItemDetailsParams>();
  const {grid, updateItem} = useContext(AppContext);

  const item = grid.items[+id];
  const [backgroundColor, setBackgroundColor] = useState(item.backgroundColor);
  const [borderColor, setBorderColor] = useState(item.borderColor);
  const [text, setText] = useState(item.text);

  const onSaveClick = useCallback(() =>
    updateItem(+id, {
      backgroundColor,
      borderColor,
      text
    }), [id, backgroundColor, borderColor, text, updateItem]);

  const updateBackgroundColor = useCallback(
    e => setBackgroundColor(e.target.value), []
  );
  const updateBorderColor = useCallback(
    e => setBorderColor(e.target.value), []
  );
  const updateText = useCallback(
    e => setText(e.target.value), []
  );

  return (
    <div>
      ID: {id}
      <input type="text" value={backgroundColor} onChange={updateBackgroundColor}/>
      <input type="text" value={borderColor} onChange={updateBorderColor}/>
      <input type="text" value={text} onChange={updateText}/>

      <button onClick={onSaveClick}>Save</button>
    </div>
  );
}