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
  const numId = +id;
  const item = grid.items[numId];
  const history = useHistory();

  const onBackClickCallback = useCallback(() => history.push('/'), [history]);
  const onSaveClickCallback = useCallback((item) => { updateItem(numId, item); history.push('/'); }, [updateItem, history, numId]);

  if (!Number.isInteger(numId) || grid.items.length <= numId) {
    return <div>Wrong index specified</div>;
  }

  return (
    <div>
      <ItemDetailsView item={item} onBack={onBackClickCallback} onSave={onSaveClickCallback} />
    </div>
  )
}