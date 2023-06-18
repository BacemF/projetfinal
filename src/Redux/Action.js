import { Clear_contact, Create_contact, Delete_contact ,Edit_contact, Get_contact, Select_contact,Delete_All } from "./Types";
// Action to add contact
export const addContact = (contact) => ({
      type: Create_contact,
      cont: contact,
  });
// Action to reach a contact
  export const getcontact = (id) => ({
    type: Get_contact,
    payload:id
  })
  // Action to update contact
  export const EditContact = (contact) => ({
    type: Edit_contact,
    payload:contact,
});
// Action to delete contact
export const DeleteContact = (id) => ({
  type: Delete_contact,
  payload:id,
});
// Action to Select contact
export const SelectContact = (id) => ({
  type: Select_contact,
  payload:id,
});
// Action to Clear contact
export const ClearContact = () => ({
  type: Clear_contact,
});
// Action to delete all
export const DeleteAll = () => ({
  type: Delete_All,
});
// Create type => create => action => create reducers