import { useSelector, useDispatch } from 'react-redux';

import { delContactAction } from '../../redux/actions';
import { contactsListSelector, searchNameSelector } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(contactsListSelector);
  const serchName = useSelector(searchNameSelector);
  const handledeleteContacts = itemId => {
    dispatch(delContactAction(itemId));
  };

  return (
    <ul>
      {contacts.length ? (
        contacts.filter(({ name }) =>
          name.toLowerCase().includes(serchName.toLowerCase())
        ).length ? (
          contacts
            .filter(({ name }) =>
              name.toLowerCase().includes(serchName.toLowerCase())
            )
            .map(el => {
              return (
                <li key={el.id}>
                  <p>{el.name}</p>
                  <p>{el.number}</p>
                  <button
                    type="button"
                    onClick={() => handledeleteContacts(el.id)}
                  >
                    Delete
                  </button>
                </li>
              );
            })
        ) : (
          <h3>We did not find any matches</h3>
        )
      ) : (
        <h3>The list is empty</h3>
      )}
    </ul>
  );
};
