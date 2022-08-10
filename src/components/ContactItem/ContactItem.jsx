import { useDeleteContactsMutation } from 'redux/contactsApi';

export const ContactItem = ({ id, name, phone }) => {
  const [deleteContacts] = useDeleteContactsMutation();

  return (
    <li>
      <p>{name}</p>
      <p>{phone}</p>
      <button type="button" onClick={() => deleteContacts(id)}>
        Delete
      </button>
    </li>
  );
};
