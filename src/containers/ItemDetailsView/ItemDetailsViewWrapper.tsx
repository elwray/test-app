import React, {useContext, FC, useCallback} from 'react';
import {useParams, useHistory} from 'react-router-dom'
import {ItemDetailsView} from './ItemDetailsView';
import AppContext from '../../contexts/AppContext';

interface ItemDetailsParams {
  id: string;
}

export const ItemDetailsViewWrapper: FC = () => {
  const {id} = useParams<ItemDetailsParams>();
  const {grid, updateItem} = useContext(AppContext);
  const item = grid.items[+id];
  const history = useHistory();

  const onBackClickCallback = useCallback(() => history.push('/'), [history]);
  const onSaveClickCallback = useCallback((item) => { updateItem(+id, item); history.push('/'); }, [id, updateItem, history]);

  return (
    <div>
      <ItemDetailsView item={item} onBack={onBackClickCallback} onSave={onSaveClickCallback} />
    </div>
  )
}