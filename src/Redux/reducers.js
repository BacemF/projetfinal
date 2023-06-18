/** @format */

import {
  Clear_contact,
  Create_contact,
  Delete_All,
  Delete_contact,
  Edit_contact,
  Get_contact,
  Select_contact,
} from "./Types";

const initialState = {
  /////////////////////////////////////////////////////////////////////
  contacts: [
    {
      id: 1,
      name: "Bacem Farhat",
      username: "BCM",
      email: "ing.bacemfarhat@gmail.com",
      phone: "+216 52 91 28 48",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      phone: "010-692-6593 x09125",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",

      phone: "1-463-123-4447",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",

      phone: "493-170-9623 x156",
    },
  ],
  contact: null,
  selectedContact:[]
};
/////////////////////////////////////////////////////////////////////
export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case Create_contact:
      return {
        ...state,
        contacts: [action.cont, ...state.contacts],
      };

    case Get_contact:
      let arr = state.contacts.filter(
        (contact) => contact.id == action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        // contacts: [action.payload, ...state.contacts],
        contact: arr,
      };
    case Edit_contact:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id == action.payload.id ? action.payload : contact
        ),
      };
    case Delete_contact:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id != action.payload
            //  view all contact list only the contact that the id is different to payload
        ),
      };

    case Select_contact:
      return {
        ...state,
        selectedContact: action.payload
      };

      case Clear_contact:
        return {
          ...state,
          selectedContact: [action.payload]
        };
        case Delete_All:
          return {
            ...state,
            contacts: []}
            
    default:
      return state;
  }
};
