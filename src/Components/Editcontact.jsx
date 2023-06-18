/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditContact, getcontact } from "../Redux/Action";
import { useNavigate, useParams } from "react-router-dom";
import { Edit_contact } from "../Redux/Types";
export const Editcontact = () => {
  let { id } = useParams();
  let Navigate = useNavigate();
  const contact = useSelector((state) => state.contact);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setEmail(contact.email);
      setPhone(contact.phone);
    }
    dispatch(getcontact(id));
  }, [contact]);

  function onUpdateContact(e) {
    e.preventDefault();
    const update_contact = Object.assign(contact, {
      name: name,
      phone: phone,
      email: email,
    });
    dispatch(EditContact(Edit_contact));
    Navigate("/");
  }

  return (
    <div>
      <div className='card border-0 shadow'>
        <div className='card-header'>Update the contact {name} </div>
        <div className='card-body'>
          <form onSubmit={(e) => onUpdateContact(e)}>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='enter the name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='enter the email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='enter the phone number'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button className='btn btn-danger' type='submit'>
              Edit contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
