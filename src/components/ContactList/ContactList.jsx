import { useGetContactsQuery } from 'redux/contactsApi';
import { useSelector } from 'react-redux';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { searchNameSelector } from 'redux/selectors';

export const ContactList = () => {
  const { data: contacts = [] } = useGetContactsQuery();
  const serchName = useSelector(searchNameSelector);
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(serchName.trim().toLowerCase())
  );

  return (
    <ul>
      {contacts.length ? (
        filteredContacts.length ? (
          filteredContacts.map(el => {
            return <ContactItem key={el.id} {...el} />;
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
