import { useSelector, useDispatch } from 'react-redux';

import { filterContactAction } from '../../redux/actions';
import { searchNameSelector } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const serchName = useSelector(searchNameSelector);

  const handleChangeInput = e => {
    dispatch(filterContactAction(e.target.value));
  };
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        required
        value={serchName}
        onChange={handleChangeInput}
      />
    </label>
  );
};
