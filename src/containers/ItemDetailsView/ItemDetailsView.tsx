import React, {FC, useState, useCallback} from 'react';
import validateColor from 'validate-color';
import {Item} from '../../types/';
import CSS from 'csstype';

interface Props {
  item: Item;
  onBack? (): void;
  onSave? (item: Item): void;
}

const containerStyle: CSS.Properties = {
  border: "1px solid gray",
  background: "#eeeeee",
  padding: "10px",
};

const sectionStyle: CSS.Properties = {
  display: "flex",
  flexDirection: "column",
  padding: "5px",
};

const inputStyle: CSS.Properties = {
  height: "25px",
};

const buttonStyle: CSS.Properties = {
  height: "40px",
  width: "100px",
  margin: "5px",
  backgroundColor: "#ccffcc",
  border: "1px solid gray",
}

export const ItemDetailsView: FC<Props> = ({item, onBack, onSave}) => {
  const [backgroundColor, setBackgroundColor] = useState(item.backgroundColor);
  const [borderColor, setBorderColor] = useState(item.borderColor);
  const [text, setText] = useState(item.text);

  const setBackgroundColorCallback = useCallback(e => setBackgroundColor(e.target.value), []);
  const setBorderColorCallback = useCallback(e => setBorderColor(e.target.value), []);
  const setTextCallback = useCallback(e => setText(e.target.value), []);

  const onSaveCallback = useCallback(() => {
    if (onSave) {
      const itemToSave: Item = { backgroundColor, borderColor, text };
      onSave(itemToSave);
    };
  }, [backgroundColor, borderColor, text, onSave]);

  const validated = validateColor(backgroundColor as string) && validateColor(borderColor as string);

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        Background color:
        <input style={inputStyle} type="text" value={backgroundColor} onChange={setBackgroundColorCallback}/>
      </div>
      <div style={sectionStyle}>
        Border color:
        <input style={inputStyle} type="text" value={borderColor} onChange={setBorderColorCallback}/>
      </div>
      <div style={sectionStyle}>
        Text:
        <input style={inputStyle} type="text" value={text} onChange={setTextCallback}/>
      </div>

      <button style={buttonStyle} onClick={onBack}>Back</button>
      <button style={buttonStyle} onClick={onSaveCallback} disabled={!validated}>Save</button>
    </div>
  );
}