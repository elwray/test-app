import React, {FC, useCallback, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import AppContext from '../../contexts/AppContext';
import {ItemComponent} from '../../components/Item/ItemComponent';
import CSS from 'csstype';

const gridStyle: CSS.Properties = {
  display: 'grid',
  gridGap: '12px',
};

export const ItemsView: FC = () => {
  const {grid} = useContext(AppContext);
  const history = useHistory();
  const handleClickCallback = useCallback((id: number) => history.push(`/${id}`), [history])

  const renderGrid = grid.items.map((item, i) => {
    return <ItemComponent id={i} key={i} item={item} onClick={() => handleClickCallback(i)}/>
  });;

  return (
    <div className="grid"
         style={{
           gridTemplateRows: `repeat(${grid.rows}, 80px)`, gridTemplateColumns: `repeat(${grid.columns}, 80px)`,
           ...gridStyle
         }}>
      {renderGrid}
    </div>
  );
};