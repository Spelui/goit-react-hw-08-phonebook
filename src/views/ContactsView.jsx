import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as contactsActions from "../redux/contacts/contactsSlice";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter";

import {
  getContacts,
  addContact,
  deleteContact,
} from "../redux/contacts/contactsOperation";

const title = {
  fontSize: "28px",
  marginBottom: "30px",
  textAlign: "center",
  marginTop: "20px",
};

const ContactsView = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const onSubmitName = ({ name, number }) => {
    const newName = {
      name,
      number,
    };

    const compareContact = contacts.some(
      (contact) => contact.name?.toLowerCase() === newName.name.toLowerCase()
    );
    if (compareContact) {
      return alert(`${name} is alredy in contacts`);
    }

    dispatch(addContact(newName));
  };

  const filteredContact = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name?.toLowerCase().includes(normalizeFilter)
    );
  };

  const filterResult = filteredContact();

  const onFilterValueChange = (e) =>
    dispatch(contactsActions.chengeFilter(e.target.value));

  const deleteContactByID = (id) => dispatch(deleteContact(id));
  return (
    <section>
      <div className="container">
        <h1 style={title}>Phonebook</h1>

        <ContactForm onSubmit={onSubmitName} />

        {contacts.length > 0 && (
          <div>
            <h2 style={title}>Contacts</h2>

            <Filter onChangeValue={onFilterValueChange} filter={filter} />
          </div>
        )}

        <ContactList
          filterContactsList={filterResult}
          onClickDel={deleteContactByID}
        />
      </div>
    </section>
  );
};

export default ContactsView;
