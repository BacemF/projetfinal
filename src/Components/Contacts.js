/** @format */

import React from "react";
import Avatar from "react-avatar";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteContact } from "../Redux/Action";

export const Contacts = ({ contact, select }) => {
  const dispatch = useDispatch();
  const { name, email, phone, id } = contact;

  return (
    <tr>
      <td scope='row'>
        {" "}
        <div className='custom-control custom-checkbox'>
          <input
            checked={select}
            type='checkbox'
            className='custom-control-input'
          />
          <label className='custom-control-label'></label>
        </div>
      </td>
      <td>
        <Avatar className='mr-2' name={name} size='45' round={true} />
        {name}
      </td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        {/* {"'/contacts/edit/:id' "} */}

        <Link to={`/contacts/edit/${id} `}>
          <span className='material-icons'>edit</span>
        </Link>
        <Link
          className='material-icons'
          onClick={() => {
            dispatch(DeleteContact(id));
          }}>
          remove_circle
        </Link>
      </td>
    </tr>
  );
};
