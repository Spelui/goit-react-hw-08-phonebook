import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

//===========================fetch===========================================================

export async function fetchContacts() {
  const { data } = await axios.get("/contacts");
  return data;
}

export async function fetchAddContacts(contact) {
  const { data } = await axios.post("/contacts", contact);
  return data;
}

export async function fetchDeleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}

//==============================Async========================================================

const getContacts = createAsyncThunk("contacts/getContactsStatus", async () => {
  try {
    const contacts = await fetchContacts();
    return contacts;
  } catch (error) {
    toast.error(`${"Something went wrong please try again"}`);
  }
});

const addContact = createAsyncThunk(
  "contacts/addContactStatus",
  async (contact) => {
    try {
      const contacts = await fetchAddContacts(contact);
      toast.success(`You add new contact ${contact.name}`);
      return contacts;
    } catch (error) {
      toast.error(`${"Something went wrong please try again"}`);
    }
  }
);

const deleteContact = createAsyncThunk(
  "contacts/deleteContactStatus",
  async (id) => {
    try {
      await fetchDeleteContact(id);
      toast.success("You delete contact");
      return id;
    } catch (error) {
      toast.error(`${"Something went wrong please try again"}`);
    }
  }
);

export { getContacts, addContact, deleteContact };
