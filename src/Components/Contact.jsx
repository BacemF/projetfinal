/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Contacts } from "./Contacts";
import {
  ClearContact,
  DeleteAll,
  DeleteContact,
  SelectContact,
} from "../Redux/Action";

export const Contact = () => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState(false);
  const contacts = useSelector((state) => state.contacts);
  const selectedContact = useSelector((state) => state.selectedContact);

  useEffect(() => {
    if (select) {
      dispatch(SelectContact(contacts.map((contact) => contact.id)));
    } else if (!select) {
      dispatch(ClearContact());
    }
  }, [select]);

  //   console.log(contacts);
  return (
    <div>
      {selectedContact.length > 0 ? (
        <button
          className='btn btn-danger mb-3'
          onClick={() => {
            return dispatch(DeleteAll());
          }}>
          {" "}
          Delete all{" "}
        </button>
      ) : null}
      <table class='table shadow'>
        <thead>
          <tr>
            <th scope='col'>
              <div className='custom-control custom-checkbox'>
                <input
                  id='select'
                  type='checkbox'
                  value={select}
                  className='custom-control-input'
                  onClick={() => setSelect(!select)}
                />
                <label
                  htmlFor='select'
                  className='custom-control-label'></label>
              </div>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <Contacts contact={contact} key={contact.id} select={select} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
